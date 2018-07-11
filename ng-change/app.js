angular.module("abc",[])
.controller('myCtrl',myCtrl)
function myCtrl($scope) {
    $scope.count = 0;
    $scope.myFunc = function() {
      $scope.count++;
    };
  }

