angular.module("app")
.controller("mainCtrl", function($scope, mainService){

    $scope.red = mainService.getcolor('red');
    $scope.orange = mainService.getcolor('orange');
    $scope.yellow = mainService.getcolor('yellow');
    $scope.green = mainService.getcolor('green');
    $scope.blue = mainService.getcolor('blue');
    $scope.indigo = mainService.getcolor('indigo');
    $scope.black = mainService.getcolor('black');
})
