(function () {
    var myModule = angular.module('mobileFrontApp');
    myModule.factory('loadingService', [function ($ionicLoading) {
        var loadingServiceInstance = {
            modalInstance: {},
            startLoading: function() {
                $ionicLoading.show({
                    template: '<div class="icon ion-loading-c"></div>'
                });  
            },
            stopLoading: function () {
                $ionicLoading.hide();
            }
            
        };

        return loadingServiceInstance;
    }]);
})();