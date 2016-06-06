angular.module("app")
.directive("directive1",function(){

  return{
    template:"<img ng-src={{randomimg}}></img>",
    scope:{
      images:"="
    },
    link:function(scope,element,attribute){
      var x = Math.floor((Math.random() * scope.images.length));
      scope.randomimg = scope.images[x];



    }
  };

});
