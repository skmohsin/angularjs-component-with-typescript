// pass strings (@)
// pass dynamic expressions (<) (dynamic data pass from parent to child component)
// pass output (&) (when we want to pass child to parent data)
// set up two-way data bindings (=)

module app.component {
  interface ITableComponentBindings {
    tableData: any;
  }

  class TableController implements ITableComponentBindings {
    tableData: any;
  }

  class TableComponent implements ng.IComponentOptions {
    public bindings: any;
    public controller: any;
    public templateUrl: any;
    constructor() {
      this.bindings = {
        tabledata: "<", 
        passValueToParentComponent: "&"
      };
      this.controller = TableController;
      this.templateUrl = "./tablecomponent/tableComponent.html";
    }
  }
  angular
    .module("productManagement")
    .component("tableComponent", new TableComponent());
}
