function MainCtrl ($scope) {
    scope_ctrl = $scope;
    $scope.data =  {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2'
      },
      types: {
        data2: 'bar'
      }
    };
    $scope.axis = {
      y: {
        label: {
          text: 'Y Label',
          position: 'outer-middle'
        },
        tick: {
          format: d3.format("$,") // ADD
        }
      },
      y2: {
        show: true,
        label: {
          text: 'Y2 Label',
          position: 'outer-middle'
        }
      }
    }

    $scope.options = {
        axes:{}
    };

    $scope.size =  { width: 500 }

    $scope.donutD =  {
                            columns: [
                                ['data1', 30],
                                ['data2', 120],
                            ],
                            type : 'donut',
                            onclick: function (d, i) { console.log("onclick", d, i); },
                            onmouseover: function (d, i) { console.log("onmouseover", d, i); },
                            onmouseout: function (d, i) { console.log("onmouseout", d, i); }
                        };
}


angular.module("test", ['c3-angularjs'])
    .controller('Ctrl', MainCtrl);