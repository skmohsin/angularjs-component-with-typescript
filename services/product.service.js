var app;
(function (app) {
    var service;
    (function (service) {
        var ProductService = /** @class */ (function () {
            function ProductService($http) {
                this.$http = $http;
            }
            ProductService.prototype.getProduct = function () {
                return this.$http.get("https://jsonplaceholder.typicode.com/users").then(function (response) {
                    return response.data;
                });
            };
            ProductService.prototype.getPosts = function (user) {
                return this.$http.get("https://jsonplaceholder.typicode.com/posts?userId=" + user.id).then(function (response) {
                    return response.data;
                });
            };
            ProductService.$inject = ['$http'];
            return ProductService;
        }());
        service.ProductService = ProductService;
        angular.module("app.service").service("ProductService", ProductService);
    })(service = app.service || (app.service = {}));
})(app || (app = {}));
