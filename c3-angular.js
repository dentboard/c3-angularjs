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
	            	console.log(scope.data)
	            	elem_dir= elem;
	            	attr_dir=attrs;
	            	scope_dir = scope;

	            	//set the id if given or add a random one
	            	var generateChartId = function() {
						if (scope.chartid) {
			           		elem[0].childNodes[0].id = scope.chartid;
			            }
		            	else {			   
		            		elem[0].childNodes[0].id = scope.chartid = 'c3'+counter;
		            		console.log('in here', scope.chartid)
		            		counter++;
		            	}
	            			            		
	            	};

	            	scope.generateChart = function() {
	            		console.log('scope.chartid', scope.chartid)
	            		axis = scope.axis || {}
		            	color = scope.color || {}
		            	size = scope.size || {}
		            	padding = scope.padding || {}
		            	grid = scope.grid || {}
	            		//generate the chart
		            	var chart = c3.generate({
		            	    bindto: '#'+scope.chartid,
		            	    data: scope.data,
		            	    axis: axis,
		            	    color: color,
		            	    size: size,   
		            	    padding: padding,
		            	    grid: grid         	    
		            	});

		            	chart1 = chart;
	            	};
	            	
	            	//console.log('chart', chart);

	            	//update 
	            	scope.$watch('data', function(newVal, oldVal) {
	            		generateChartId();
	            		console.log('newVal', newVal, 'oldVal', oldVal)
	            		if (newVal && newVal == oldVal) {
	            			console.log('chartid', scope.chartid) 
	            			scope.generateChart();
	            		}
	            		else if (newVal != oldVal) {
	            			console.log('chartid', scope.chartid) 
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
	            },
	            template: "<c3-chart data='dataObj'></c3-chart>",
	            link: function(scope, elem, attrs, controller) {
					console.log("donut", scope.data)
					var values = _.values(scope.data);
					var labels = Object.keys(scope.data);
					scope_donut = scope;
					scope.dataObj = {columns:[]};
					scope.dataObj['rows'] = [labels, values];
					scope.dataObj['type'] = 'donut';
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
				scope_bar = scope;
				scope.dataObj = {columns: []};
				scope.$watch('data', function(newVal) {
					console.log('data', newVal);
					scope.dataObj.x = 'x'
					scope.dataObj.columns[0] = ['x'].concat(Object.keys(newVal));
					scope.dataObj.columns[1] = ['data1'].concat((_.values(newVal)));
					scope.dataObj.type = 'bar';
				})
			}
	    };
	})
})();
