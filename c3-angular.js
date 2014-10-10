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
	            	if (scope.chartid){
	            		elem[0].childNodes[0].id = scope.chartid;
	            	}
	            	else{
	            		elem[0].childNodes[0].id = scope.chartid = 'c3'+counter;
	            		counter++;
	            	}

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
	            	//console.log('chart', chart);

	            	//update 
	            	scope.$watch('data', function(newVal, oldVal) {
	            		if(newVal != oldVal){
		            		//console.log('in data watch', typeof(newVal), oldVal);
		            		chart.unload();
		            		chart.load(
		            			JSON.parse(newVal)
		            		);
		            	}
	            	});

	            },
	    	};
		})
		.directive('c3Donut', function() {
	        return {
	            restrict: "AE",
	            scope:{
	            	data: "=",
	            	//axis: "=", 
	            	chartid: "@",
	            },
	            template: "<c3-chart></c3-chart>",
	            // compile: function compile(tElement, tAttrs, transclude) {
	            //       return {
	            //         pre: function preLink(scope, iElement, iAttrs, controller) { 
	            //         	dataObj = scope.data;
	            //         },
	            //       }
	            // },
	            link: function(scope, elem, attrs, controller) {
					console.log("donut", scope.data)
					// var labels = _.map(scope.data, function(value, key){return key});
					// var values = _.map(scope.data, function(value, key){return value});
					scope_donut = scope;
					elem_d = elem;
					var dataObj = {};
					//dataObj['rows'] = [labels, values];
					dataObj['type'] = 'donut';
					/**
						data: {
						    columns: [
						        ['data1', 30],
						        ['data2', 120],
						    ],
						    type : 'donut',
						    onclick: function (d, i) { console.log("onclick", d, i); },
						    onmouseover: function (d, i) { console.log("onmouseover", d, i); },
						    onmouseout: function (d, i) { console.log("onmouseout", d, i); }
						},
						donut: {
						    title: "Iris Petal Width"
						}
					**/
				}
	        }
	    });
}());
