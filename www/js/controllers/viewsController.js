(function () {
    angular.module("mobileFront.controllers")
        .controller("ViewsCtrl", function ($http, $scope, $state, views, $ionicActionSheet) {
            $scope.views = views;
            //$scope.loadViews = function() {
            //    viewService.getViews().then(function(data) {
            //        $scope.views = data;
            //    }, function(data) {
            //        $state.go('login');
            //    });
            //};

            //$scope.loadViews();

            $scope.openMenu = function () {
                $ionicActionSheet.show({
                    buttons: [
                        { text: 'Refresh' },
                        { text: 'Settings' },
                        { text: 'Logout' }
                    ],
                    cancelText: 'Cancel',
                    buttonClicked: function (index) {
                        return true;
                    }
                });
            };
        });
})();