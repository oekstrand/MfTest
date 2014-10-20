(function () {
    var myModule = angular.module('mobileFrontApp');
    myModule.factory('loadingService', [function ($ionicLoading) {
        var loadingServiceInstance = {
            modalInstance: {},
            startLoading: function() {
                $ionicLoading.show({
                    template: 'Loading...'
                });  
            },
            stopLoading: function () {
                $ionicLoading.hide();
            }
            
        };

        return loadingServiceInstance;
    }]);
})();