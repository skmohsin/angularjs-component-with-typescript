// https://jsonplaceholder.typicode.com/posts?userId=1

module app.component {
  export interface IPost {
    id: number;
    title: string;
    body: string;
  }

  interface IPostController {
    posts: IPost[];
    diplayPosts(post: any): any;
  }

  class PostController implements IPostController {
    id: number;
    title: string;
    body: string;
    posts: IPost[];
    constructor() {}

    diplayPosts(post: any): any {
      alert("post :" + JSON.stringify(post));
    }
  }

  class PostComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: any;
    constructor() {
      this.bindings = {
        posts: "<",
        postBy: "<",
      };
      this.controller = PostController;
      this.templateUrl = "./postcomponent/postComponent.html";
    }
  }
  angular
    .module("productManagement")
    .component("postComponent", new PostComponent());
}
