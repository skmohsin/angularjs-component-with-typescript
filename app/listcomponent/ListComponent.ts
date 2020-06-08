module app.component {
  interface IListComponentBindings {
    listData: any;
  }

  class ListController implements IListComponentBindings {
    listData: any;
    constructor() {
    }
  }

  class ListComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: any;
    constructor() {
      this.bindings = {
        listdata: "<",
      };
      this.controller = ListController;
      this.templateUrl = "./listcomponent/listComponent.html";
    }
  }

  angular
    .module("productManagement")
    .component("listComponent", new ListComponent());
}
