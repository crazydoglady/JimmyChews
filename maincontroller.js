(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('MainController', function ( ProductService, $scope) {
      var mainCtrl = this;

      mainCtrl.products = ProductService.getItems();

      mainCtrl.addProduct = function (newItem) {
        ProductService.addItem(newItem);
        $scope.newProduct = {};
      }
      mainCtrl.deleteProduct = function (item) {
      ProductService.deleteItem(item);
      $scope.newProduct = {};
       };
      // mainCtrl.editProduct = function (product) {
      // ProductService.editItem(product)
      //   var editOneProduct = product;
      //   console.log(editProduct);
      //   $scope.newProduct = {};
      // }
    });


})();
