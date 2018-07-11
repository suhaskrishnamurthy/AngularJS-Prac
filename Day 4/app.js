angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    $scope.arr=["Butter","Cheese","Milk"];
    $scope.add=function(){

        $scope.arr.push($scope.abc);
        console.log($scope.arr);
    <li>Butter</li>
    <li>Cheese</li>
    <li>Milk</li>
    <li>$scope.arr.push($scope.abc)</li>
    }
    
}
