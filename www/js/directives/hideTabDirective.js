(function() {
    var module = angular.module('mobileFrontApp.directives', []);
    module.directive('hideTabs', function ($rootScope) {
        return {
            restrict: 'A',
            link: function ($scope, $el) {
                $rootScope.hideTabs = true;
                $scope.$on('$destroy', function () {
                    $rootScope.hideTabs = false;
                });
            }
        };
    });
})();