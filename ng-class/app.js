angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
    console.log("Hello");
    $scope.a ="Suhas V K";
}
function ctrl1($scope)
{
    $scope.b ="1SJ14CS100";
}
