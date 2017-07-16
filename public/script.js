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
        .when('/', {
            controller: 'mainCtrl',
            templateUrl: './components/home/home.html'
        })
        .when('/about', {
            controller: 'aboutCtrl',
            templateUrl: './components/about/about.html'
        })
        .when('/product', {
            controller: 'productCtrl',
            templateUrl: './components/contact/contact.html'
        })
        .when('/sign-up', {
            controller: 'signupCtrl',
            templateUrl: './components/home/sign-up.html'
        })
        .when('/sign-in', {
            controller: 'signinCtrl',
            templateUrl: './components/home/sign-in.html'
        })
        .otherwise({
            redirectTo: '/'
        })
});

app.directive('myBody', function () {
    return {
        templateUrl: 'body.html'
    }
});



window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


$(document).ready(function () {
    // Initialize Tooltip
    $('[data-toggle="tooltip"]').tooltip();

    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#myPage']").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {

            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
})
