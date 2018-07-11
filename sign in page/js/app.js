angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    $scope.obj={};
    $scope.obj1={};
    $scope.myVar=false;
    $scope.signup = function()
    {
        console.log($scope.obj)
    }
 $scope.toggle = function(x)
    {
        if(x)
         {
            $scope.myVar = false;
         }
         else{
             $scope.myVar = true;
         }
    }
}
