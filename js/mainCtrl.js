angular.module("app")
.controller("mainCtrl", function($scope, mainService){

    $scope.ora = mainService.getcolor('orange');

})
