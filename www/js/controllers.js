angular.module('mobileFront.controllers', [])

    .controller("LoginCtrl", ['$http', '$scope', '$state', 'viewService', 'loadingService', 'localstorage', '$ionicLoading', function ($http, $scope, $state, viewService, loadingService, localstorage, $ionicLoading) {
        $scope.loginModel = {
            customerId: "wsxEDC",
            domainAndUsername: "gridpro\\olek",
            password: "",
            rememberMe: false
        };

        $scope.login = function () {
            //loadingService.startLoading();
            $ionicLoading.show({
                template: 'Loading...'
            });

            $http.post("https://mobilefronttest.azurewebsites.net/api/Account/Login", $scope.loginModel).success(function (data) {
                if (data.loginSuccessful) {
                    localstorage.set('token', data.tokenGuid);
                    localstorage.set('customerId', $scope.loginModel.customerId);
                    viewService.getViews().then(function (response) {
                        $scope.views = response;
                        $state.go('views');
                        //loadingService.stopLoading();
                        $ionicLoading.hide();
                    });
                }
                //TODO: Change so that the login function also loads the views

            });
        };
    }]).

controller("ViewDetailsCtrl", ['$http', '$scope', '$location', 'viewService', '$stateParams', function ($http, $scope, $location, viewService, $stateParams) {
    $scope.statusGroups = {};
    $scope.view = {};
    $scope.headerText = '';
    $scope.filter = '';
    var self = this;

    this.groupViewsByStatus = function () {
        for (var i = 0; i < $scope.view.workItems.length; i++) {
            var currentItem = $scope.view.workItems[i];
            if ($scope.statusGroups[currentItem.status.displayName] === undefined) {
                $scope.statusGroups[currentItem.status.displayName] = [];
            }
            $scope.statusGroups[currentItem.status.displayName].push(currentItem);
        }
    };

    $scope.startLoading = function () {
        //loadingService.startLoading();
    };

    $scope.loadView = function () {
        viewService.getViewByName($stateParams.viewName).then(function (data) {
            $scope.view = data;
            self.groupViewsByStatus();
        }, function (data) {
            $location.path('/login');
        });
    };

    $scope.loadView();
}])

.controller('AccountCtrl', function ($scope) {
});


