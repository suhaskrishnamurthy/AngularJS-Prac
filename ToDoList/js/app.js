angular.module("abc",[])
.controller("ctrl",ctrl)
function ctrl($scope)
{
    $scope.arr=[];
    $scope.add=function(){
     $scope.arr.push($scope.todoValue);
     $scope.todoValue='';
     console.log("$scope.todoValue");
    }
     $scope.edit=function(i)
     {
        $scope.todoValue = $scope.arr[i] ;
 
     };
    } 
    
