var app;
(function (app) {
    var domain;
    (function (domain) {
        var Product = /** @class */ (function () {
            function Product(productId, productName, price) {
                this.productId = productId;
                this.productName = productName;
                this.price = price;
            }
            Product.prototype.calculateDiscount = function (percent) {
                return (this.price = (this.price * percent) / 100);
            };
            return Product;
        }());
        domain.Product = Product;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
