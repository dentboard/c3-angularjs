var app = angular.module("test", ['c3-angularjs']);

app.controller("Ctrl",function($scope){
    scope_ctrl = $scope;
    $scope.data = {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ]
    };

    $scope.type = 'bar';
});
