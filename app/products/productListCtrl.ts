module app.productList {
  interface IProductListModel {
    title: string;
    products: app.domain.IProduct[];
    isShowList: boolean;
    isShowTable: boolean;
    showList(): void;
    showTable(): void;
    getProduct(): void;
    users: any[];
    posts: app.component.IPost[];
  }

  class ProductListCtrl implements IProductListModel {
    title: string;
    isShowList: boolean;
    isShowTable: boolean;
    products: app.domain.IProduct[];
    posts: component.IPost[];
    users: any[];
    user : any;
    postBy: any;
    static $inject = ["ProductService"];
    constructor(private productService: app.service.ProductService) {
      this.title = "Users List";
      this.isShowList = true;
      this.isShowTable = false;
      this.getProduct();
    }

    showList(): void {
      this.isShowList = true;
      this.isShowTable = false;
    }
    
    showTable(): void {
      this.isShowTable = true;
      this.isShowList = false;
    }

    valueGetByTableComponent(user): void {
      this.user = user;
      console.log('user : ', this.user);
    }

    getProduct(): void {
      this.productService.getProduct().then((response) => {
        this.users = response;
        console.log("inside get product funtion");
        console.log(this.users);
      });
    }

    getPosts(user: any): void {
      console.log("inside posts function", user);
      this.postBy = user;
      this.productService.getPosts(user).then((response : component.IPost[]) => {
        this.posts = response;
        console.log(this.posts);
      });
    }

  }

  angular
    .module("productManagement")
    .controller("ProductListCtrl", ProductListCtrl);
}
