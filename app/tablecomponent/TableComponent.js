// pass strings (@)
// pass dynamic expressions (<) (dynamic data pass from parent to child component)
// pass output (&) (when we want to pass child to parent data)
// set up two-way data bindings (=)
var app;
(function (app) {
    var component;
    (function (component) {
        var TableController = /** @class */ (function () {
            function TableController() {
            }
            return TableController;
        }());
        var TableComponent = /** @class */ (function () {
            function TableComponent() {
                this.bindings = {
                    tabledata: "<",
                    passValueToParentComponent: "&"
                };
                this.controller = TableController;
                this.templateUrl = "./tablecomponent/tableComponent.html";
            }
            return TableComponent;
        }());
        angular
            .module("productManagement")
            .component("tableComponent", new TableComponent());
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
