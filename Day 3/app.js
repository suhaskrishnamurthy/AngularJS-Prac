angular.module("abc",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
    
}
function ctrl1($scope)
{
    $scope.arr=[{name:"shekhar",age:"21",place:"dbpur"},{name:"sds",age:"21",place:"sdsd"},{name:"suhas", age:"22", place:"blore"}];
}
