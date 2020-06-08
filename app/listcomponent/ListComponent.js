var app;
(function (app) {
    var component;
    (function (component) {
        var ListController = /** @class */ (function () {
            function ListController() {
            }
            return ListController;
        }());
        var ListComponent = /** @class */ (function () {
            function ListComponent() {
                this.bindings = {
                    listdata: "<",
                };
                this.controller = ListController;
                this.templateUrl = "./listcomponent/listComponent.html";
            }
            return ListComponent;
        }());
        angular
            .module("productManagement")
            .component("listComponent", new ListComponent());
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
