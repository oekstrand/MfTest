angular.module('mobileFrontApp', ['ionic', 'mobileFront.controllers'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                StatusBar.hide();
            }
        });
    })
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];

        $stateProvider
            .state('views', {
                url: '/views',
                templateUrl: 'templates/views.html',
                controller: 'ViewsCtrl',
                resolve: {
                    views: function (viewService) {
                        return viewService.getViews();
                    }
                }
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

        $urlRouterProvider.otherwise('/login');

    });

