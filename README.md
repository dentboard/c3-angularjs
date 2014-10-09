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

And you can start using the charts using:

```
    <c3-chart data="{{data}}"></c3-chart>
```

Optional attributes include chartid (if undefined, a randome id is defined), grid, padding, size, color and axis. Refer to c3 Documentation for the format of these objects. 

