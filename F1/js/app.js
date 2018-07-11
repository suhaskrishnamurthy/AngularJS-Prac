angular.module("abc",[])
.controller("ctrl",ctrl)
.filter("file",file)
function file()
{
    return function(x){
        var i;
        var c;
        var txt = "";
        var x=[i];
        for(i=0;i<x.length;i++){
            c=x[i];
            if(x[i]=='\0'){
            
                c=x[i+1].toUpperCase();
            
            }
                txt=txt + c;
        }
        return txt;
    }
}
function ctrl($scope)
{
    $scope.names=['Jani carl','Margreth hege','Joe gustav','Birgit mary'];
}

    
