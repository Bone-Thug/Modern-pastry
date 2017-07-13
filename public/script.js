var app = angular.module("myApp", ["ngRoute"]);

app.controller("mainCtrl", function ($scope, $http) {});

app.directive('myNav', function () {
    return {
        templateUrl: 'nav.html'
    }
});

app.directive('myBody', function () {
            return {
                templateUrl: 'body.html'
            }
            });

app.config(function ($routeProvider) {
    $routeProvider
//        .when("/", {
//            controller: 'mainCtrl',
//            templateUrl: 'components/index.html'
//        })
        .when('/', {
            controller: 'newsCtrl',
            templateUrl: 'components/home.html'
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
            .when('/sign-up', {
            controller: 'newsCtrl',
            templateUrl: 'components/sign-up.html'
        })
    .when('/sign-in', {
            controller: 'newsCtrl',
            templateUrl: 'components/sign-in.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});
