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

    $scope.test = {
      pbad: 1,
      neil: 2,
      sanke: 3
    }

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

    $scope.donutD = {
        'food': 400,
        'clothes:': 200,
        'utilities': 1000,
    }

    $scope.line = [30, 200, 100, 400, 150, 250];
    $scope.times = ['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04', '2013-01-05', '2013-01-06'];
    $scope.hi = "label1";
}


angular.module("test", ['c3-angularjs'])
    .controller('Ctrl', MainCtrl);