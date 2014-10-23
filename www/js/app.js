angular.module('mobileFrontApp', ['ionic', 'mobileFront.controllers'])
    .run(function ($ionicPlatform, ionic) {
        ionic.Platform.ready(function () {
            ionic.Platform.fullScreen(true, true);
        });

        $ionicPlatform.ready(function () {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            ionic.Platform.fullScreen();
            //if ($cordovaStatusbar)
            //    $cordovaStatusbar.hide();
            //if (window.StatusBar) {
            //    StatusBar.hide();
            //}
        });
    })
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (e, toState, toParams, fromState, fromParams, error) {
            //TODO: Implement error handling
            return $state.go('login');
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

