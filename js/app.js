angular.module("app",['ui.router']);

angular.module("app").config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: '../routes/home.html'
        })

        .state('red', {
            url:"/red",
            templateUrl:"../routes/colors/red.html"
        })
        .state('orange', {
            url:"/orange",
            templateUrl:"../routes/colors/orange.html"
        })
        .state('yellow', {
            url:"/yellow",
            templateUrl:"../routes/colors/yellow.html"
        })
        .state('green', {
            url:"/green",
            templateUrl:"../routes/colors/green.html"
        })
        .state('blue', {
            url:"/blue",
            templateUrl:"../routes/colors/blue.html"
        })
        .state('indigo', {
            url:"/indigo",
            templateUrl:"../routes/colors/indigo.html"
        })
        .state('black', {
            url:"/black",
            templateUrl:"../routes/colors/black.html"
        })
});
