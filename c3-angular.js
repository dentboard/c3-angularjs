angular.module('c3-angularjs', [])
	.directive('c3Chart', function() {
        return {
            restrict: 'AE',
            scope:{
            	data: '@',
            	type: '@', 
            	chartid: '@'
            },
            template: "<div></div>",
            link: function(scope, elem, attrs) {

            	elem_dir= elem;
            	attr_dir=attrs;
            	scope_dir = scope;

            	//set the id
            	elem[0].childNodes[0].id = scope.chartid;
            	console.log('scope data', '#'+scope.chartid);
            	
            	var chart = c3.generate({
            	    bindto: '#'+scope.chartid,
            	    data: JSON.parse(scope.data)
            	});
            	
            },
    };
});

