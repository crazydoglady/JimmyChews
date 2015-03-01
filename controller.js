(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('MainController', function ( ProductService, $scope) {
      var mainCtrl = this;

      mainCtrl.products = ProductService.getItems();

      mainCtrl.alertMe = function () {
        alert("Hi form mainCtrl");
      };

      mainCtrl.addProduct = function (newItem) {
        ProductService.addItem(newItem);
        $scope.newProduct = {};
      }
      mainCtrl.deleteProduct = function (product) {
      ProductService.deleteItem(product);
       };
      // mainCtrl.editProduct = function (newItem) {
      //   ProductsPageService.editItem(Item)
      //   $scope.editItem ={};
      // }
    });


})();
