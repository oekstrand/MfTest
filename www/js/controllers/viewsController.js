(function () {
    angular.module("mobileFront.controllers")
        .controller("ViewsCtrl", function ($http, $scope, $state, views) {
                $scope.views = views;
                //$scope.loadViews = function() {
                //    viewService.getViews().then(function(data) {
                //        $scope.views = data;
                //    }, function(data) {
                //        $state.go('login');
                //    });
                //};

                //$scope.loadViews();
            }
        );
})();