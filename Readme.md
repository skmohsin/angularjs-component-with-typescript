# Component In AngularJs With Type Script
This code sample explaines how we can work with components in angularjs using typescript, May this sample code will help you to understad how the concept.

## Prerequisites
* Visual Studio Code or any editor
* Install typescript latest version globally
* Install "Live Server" Extension of visual studio code

## How to run
* Go to project root directory.
* Run the command tsc -w (-w flag for watch mode).
* Right click on Index.html file and select "open with live server".

**_Below are the components that used in this sample demo_**

* ProductComponent  (app/products)
    * This is parent component which contains List Component, Table Component and Post Component.
    * This contains two button "Show List" and "Show Table".
    * If user click on Show List then List component will rendered and if click on Show Table then Table Component will rendered.

    ```html
        <div class="container-fluid" ng-controller="ProductListCtrl as vm">
        <h1>{{vm.title}}</h1>
        <button ng-click="vm.showList()">Show List</button>
        <button ng-click="vm.showTable()">Show Table</button> <br /> </br>
        <div class="row">
            <div class="col-md-6">
                <div class="card" ng-show="vm.user">
                <div class="container">
                    <h4><b>{{vm.user.name}} ({{vm.user.username}})</b></h4>
                    <p>Email: {{vm.user.email}}</p>
                    <p>Phone: {{vm.user.phone}}</p>
                    <p>Website: {{vm.user.website}}</p>
                    <p>Address: {{vm.user.address.street}}, {{vm.user.address.suite}} {{vm.user.address.city}} ({{vm.user.address.zipcode}})</p>
                    <button ng-click="vm.getPosts(vm.user)">View User Post</button>
                </div>
            </div>
        </div>
        </div>
        <div class="row">
            <div class="col-md-6">
            <list-component listdata="vm.users" ng-if="vm.isShowList"></list-component>
            <table-component
                tabledata="vm.users"
                pass-value-to-parent-component="vm.valueGetByTableComponent(userObj)"
                ng-if="vm.isShowTable"
            ></table-component></div>
            <div class="col-md-6">
                <post-component posts="vm.posts" post-By="vm.postBy"  style="word-wrap: break-word !important;"></post-component>
            </div>
        </div>
        </div>
    ```

* List Component    (app/listcomponent)
    * This is Child component which is placed in Product Component, see below code.

    ```html
         <list-component listdata="vm.users" ng-if="vm.isShowList"></list-component>
    ```
    * If you can see we pass data to list component using **"listdata="vm.users"**

    * Below is the bindings that create magic
    ```javascript
        this.bindings = {
            listdata: "<",
        };
    ```

![list-component](/images/list.png)

* Table Component   (app/tablecomponent)
     * This is Child component which is placed in Product Component, see below code.

    ```html
         <table-component
                tabledata="vm.users"
                pass-value-to-parent-component="vm.valueGetByTableComponent(userObj)"
                ng-if="vm.isShowTable"
            ></table-component>
    ```
    * If you can see we pass data to table component using **"tabledata="vm.users"** and invoke function of parent component by binding function **pass-value-to-parent-component="vm.valueGetByTableComponent(userObj)"**

    * Below is the bindings that create magic
    ```javascript
        this.bindings = {
              tabledata: "<",
              passValueToParentComponent: "&"
         };
        ```
![table-component](/images/table.png)

* Post Component    (app/postcomponent)
    * This is component which will show user wise posts
    * Below is the bindings for post component
     ```javascript
        this.bindings = {
            posts: "<",
            postBy: "<",
        };
     ```


    ## Below is the complete picture of running demo

![all-component](/images/all.png)

     


