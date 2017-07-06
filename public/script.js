var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainCtrl", function ($scope, $http) {
});

app.directive('myNav', function () {
    return {
        templateUrl: 'nav.html'

    }
});

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            controller: 'mainCtrl',
            templateUrl: 'components/home/home.html'
        })
        .when('/home', {
            controller: 'homeCtrl',
            templateUrl: 'components/home/home.html'
    })

        .when('/about', {
            controller: 'aboutCtrl',
            templateUrl: 'components/about/about.html'
        })
        .when('/contact', {
            controller: 'contactCtrl',
            templateUrl: 'components/contact/contact.html'
        })
        .when('/news', {
            controller: 'newsCtrl',
            templateUrl: 'components/news/news.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});