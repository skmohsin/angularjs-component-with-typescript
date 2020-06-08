// https://jsonplaceholder.typicode.com/posts?userId=1
var app;
(function (app) {
    var component;
    (function (component) {
        var PostController = /** @class */ (function () {
            function PostController() {
            }
            PostController.prototype.diplayPosts = function (post) {
                alert("post :" + JSON.stringify(post));
            };
            return PostController;
        }());
        var PostComponent = /** @class */ (function () {
            function PostComponent() {
                this.bindings = {
                    posts: "<",
                    postBy: "<",
                };
                this.controller = PostController;
                this.templateUrl = "./postcomponent/postComponent.html";
            }
            return PostComponent;
        }());
        angular
            .module("productManagement")
            .component("postComponent", new PostComponent());
    })(component = app.component || (app.component = {}));
})(app || (app = {}));
