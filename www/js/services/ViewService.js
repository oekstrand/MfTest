(function () {
    var myModule = angular.module('mobileFrontApp');
    myModule.factory('viewService', ['$http', '$q', 'localstorage', function ($http, $q, localstorage) {
        var self = this;
        self.views = [];

        self.findView = function(views, viewName) {
            for (var i = 0; i < self.views.length; i++) {
                if (self.views[i].name === viewName) {
                    return self.views[i];
                }
            }
            return null;
        };

        var viewServiceInstance = {
            getViews: function () {
                var defered = $q.defer();

                if (!self.views.length) {
                    var token = localstorage.get("token");
                    var customerId = localstorage.get("customerId");
                    $http.get("https://mobilefronttest.azurewebsites.net/api/Views/Index?token=" + token + "&customerId=" + customerId).then(function (response) {
                        self.views = response.data.views;
                        defered.resolve(self.views);
                    }, function (response) {
                        defered.reject(response.data);
                    });
                } else {
                    defered.resolve(self.views);
                }

                return defered.promise;
            },
            getViewByName: function (viewName) {
                var defered = $q.defer();
                if (self.views.length === 0) {
                    this.getViews().then(function(response) {
                        defered.resolve(self.findView(response, viewName));
                    }, function(data) {
                        defered.reject(data);
                    });
                } else {
                    defered.resolve(self.findView(self.views, viewName));
                }
                return defered.promise;
            }
        };

        return viewServiceInstance;
    }]);
})();