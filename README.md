c3-angularjs
============

Angularjs directive for c3.js charts -> http://c3js.org/gettingstarted.html

This directive depends on angularjs, c3 (which depends on d3) and underscore. Clone this repository and run ```bower install``` to grab the dependencies or download c3-angular.js and inject into your app -> ```angular.module("testapp", ['c3-angularjs'])```

Load the scripts and css in the following order:
```
	<link href="bower_components/c3/c3.css" rel="stylesheet" type="text/css">
	<script src="bower_components/underscore/underscore-min.js"></script>
	<script src="bower_components/d3/d3.min.js" charset="utf-8"></script>
	<script src="bower_components/c3/c3.min.js"></script>
	<script src="bower_components/angular/angular.min.js"></script>
	<script src="c3-angular.js"></script>
```

Look at the test.html to quickly look at how its set up!

Line/Time-Series
-------

```
	<c3-line data="data" label="revenue" time-series="times"></c3-line>
```

Data here can be defined as an array of numbers ```[30, 200, 100]``` and times can be defined as an array of strings containing the corresponding times ```['2013-01-02', '2013-01-03', '2013-01-04']```. Don't provide time-series attribute in order to just do a simple line chart

Donut/pie
-------

```
	<c3-donut data="data"></c3-donut>
```

Data here can be defined as an object in the following format:
```
	$scope.data = {
	    'food': 400,
	    'clothes:': 200,
	   	'utilities': 1000,
	}
```
Add pie as an attribute to make the chart a pie chart

Bar
-------

```
	<c3-bar data="test"></c3-bar>
```

Data here can be defined as an object in the following format:
```
	$scope.data = {
	    March: 10,
    	April: 15,
   		May: 30
	}
```



Generic Directive
-------
In order to have the ability to customize your charts fully you can use the generic chart directive which takes in data as a required attribute. This data object follows the format as specified in c3 documentation

```
    <c3-chart data="data"></c3-chart>
```

Optional attributes include chartid (if undefined, a random id is defined), grid, padding, size, color and axis. Refer to c3 Documentation for the format of these objects. 


