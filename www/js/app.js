// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('mobileFrontApp', ['ionic', 'starter.controllers', 'starter.services'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        //Enable cross domain calls
        //$httpProvider.defaults.useXDomain = true;

        //Remove the header used to identify ajax call  that would prevent CORS from working
        //delete $httpProvider.defaults.headers.common['X-Requested-With'];

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
            .state('views', {
                url: '/views',
                templateUrl: 'templates/views.html',
                controller: 'ViewsCtrl'
            })
            .state('login', {
                url: "/login",
                templateUrl: "templates/login.html",
                controller: 'LoginCtrl'
            })
            .state('viewDetails', {
                url: '/views/:viewName',
                templateUrl: 'templates/viewDetails.html',
                controller: 'ViewDetailsCtrl'
            });




        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/login');

    });

