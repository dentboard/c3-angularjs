/**
 * @name C3 angularjs directive
 * @desc Generic directive along with directives for commonly used charts
 */
var counter = Math.ceil((Math.random() * 1000));
(function(){
	angular.module('c3-angularjs', [])
		.directive('c3Chart', function() {
	        return {
	            restrict: "AE",
	            scope:{
	            	data: "=",
	            	axis: "=", 
	            	chartid: "@",
	            	color: "=", 
	            	size: "=",
	            	padding: "=",
	            	grid: "=",
	            },
	            template: "<div></div>",
	            link: function(scope, elem, attrs) {
	            	scope_dir = scope;

	            	//set the id if given or add a random one
	            	var generateChartId = function() {
						if (scope.chartid) {
			           		elem[0].childNodes[0].id = scope.chartid;
			            }
		            	else {			   
		            		elem[0].childNodes[0].id = scope.chartid = 'c3'+counter;
		            		counter++;
		            	}            		
	            	};

	            	//generate the chart
	            	scope.generateChart = function() {
	            		axis = scope.axis || {}
		            	color = scope.color || {}
		            	size = scope.size || {}
		            	padding = scope.padding || {}
		            	grid = scope.grid || {}
		            	var chart = c3.generate({
		            	    bindto: '#'+scope.chartid,
		            	    data: scope.data,
		            	    axis: axis,
		            	    color: color,
		            	    size: size,   
		            	    padding: padding,
		            	    grid: grid         	    
		            	});
	            	};

	            	//update 
	            	scope.$watch('data', function(newVal, oldVal) {
	            		generateChartId();
		            		if (newVal && newVal == oldVal) {
	            			scope.generateChart();
	            		}
	            		else if (newVal != oldVal) {
	            			chart.unload();
	            			chart.load(newVal);
	            		}
	            	});

	            },
	        }
		})
		.directive('c3Donut', function() {
	        return {
	            restrict: "AE",
	            scope:{
	            	data: "=",
	            	pie: "@"
	            },
	            template: "<c3-chart data='dataObj'></c3-chart>",
	            link: function(scope, elem, attrs, controller) {
					scope.dataObj = {};
					scope.$watch('data', function(newVal) {
						var values = _.values(scope.data);
						var labels = Object.keys(scope.data);
						scope.dataObj['rows'] = [labels, values];
						if('pie' in attrs){
							scope.dataObj['type'] = 'pie';
						}
						else{
							scope.dataObj['type'] = 'donut';
						}
					})
				},
	        }
	    })
		.directive('c3Bar', function() {
			return {
				restrict: "AE",
				scope: {
					data: "=",
				},
				template: "<c3-chart data='dataObj'></c3-chart>",
				link: function(scope, elem, attrs) {
					//scope_bar = scope;
					scope.dataObj = {};
					scope.$watch('data', function(newVal) {
						//console.log('data', newVal);
						var labels = Object.keys(newVal);
						var values = _.values(newVal);
						scope.dataObj['rows'] = [labels, values];
						scope.dataObj['type'] = 'bar';
					})
				}
		    };
		})
		.directive('c3Line', function() {
	        return {
	            restrict: "AE",
	            scope:{
	            	data: "=",
	            	timeSeries: "=",
	            	label: "="
	            },
	            template: "<c3-chart data='dataObj' axis='axisObj'></c3-chart>",
	            link: function(scope, elem, attrs, controller) {
					scope.dataObj = {};
					attrs_line = attrs;
					scope.axisObj = {};
					scope.$watch('data', function(newVal) {
						scope.data.unshift(scope.label)
						if('timeSeries' in attrs){
							scope.dataObj['x'] = 'x';
							scope.timeSeries.unshift('x');
							scope.dataObj['columns'] = [scope.timeSeries, scope.data];
							scope.axisObj['x'] = {}
							scope.axisObj['x']['type'] = 'timeseries';
							scope.axisObj['x']['tick'] = {}
							scope.axisObj['x']['tick']['format'] = '%Y-%m-%d';
							console.log("in line", scope.dataObj, scope.axisObj);
						}
						else{
							scope.dataObj['columns'] = [scope.data]
						}
					})
				},
	        }
	    })
})();

