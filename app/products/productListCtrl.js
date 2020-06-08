var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = /** @class */ (function () {
            function ProductListCtrl(productService) {
                this.productService = productService;
                this.title = "Users List";
                this.isShowList = true;
                this.isShowTable = false;
                this.getProduct();
            }
            ProductListCtrl.prototype.showList = function () {
                this.isShowList = true;
                this.isShowTable = false;
            };
            ProductListCtrl.prototype.showTable = function () {
                this.isShowTable = true;
                this.isShowList = false;
            };
            ProductListCtrl.prototype.valueGetByTableComponent = function (user) {
                this.user = user;
                console.log('user : ', this.user);
            };
            ProductListCtrl.prototype.getProduct = function () {
                var _this = this;
                this.productService.getProduct().then(function (response) {
                    _this.users = response;
                    console.log("inside get product funtion");
                    console.log(_this.users);
                });
            };
            ProductListCtrl.prototype.getPosts = function (user) {
                var _this = this;
                console.log("inside posts function", user);
                this.postBy = user;
                this.productService.getPosts(user).then(function (response) {
                    _this.posts = response;
                    console.log(_this.posts);
                });
            };
            ProductListCtrl.$inject = ["ProductService"];
            return ProductListCtrl;
        }());
        angular
            .module("productManagement")
            .controller("ProductListCtrl", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
