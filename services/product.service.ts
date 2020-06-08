module app.service {
    interface IProductService {
        getProduct(): ng.IPromise<app.domain.IProduct>;
    }

    export class ProductService implements IProductService {
        static $inject = ['$http'];
        constructor(private $http: ng.IHttpService){
        }
        getProduct(): angular.IPromise<any> {
            return this.$http.get(`https://jsonplaceholder.typicode.com/users`).then((response) =>{
                return response.data
            });
        }

        getPosts(user: any): angular.IPromise<any> {
            return this.$http.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then((response) =>{
                return response.data
            });
        }
    }

    angular.module("app.service").service("ProductService", ProductService);
}