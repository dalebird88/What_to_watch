angular.module("app")
.directive("reload",function($window){

return{
  restrict:"A",
  link:function(scope,element,attribute){
    element.on("click",function(){
      $window.location.reload();
    })
  }
}

})
