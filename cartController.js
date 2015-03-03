(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('CartController', function ( PurchaseService, $scope) {
      var cartCtrl = this;

      mainCtrl.products = ProductService.getItems();

      mainCtrl.addPurchase = function (newItem) {
        PurchaseService.addItem(newItem);
      }
      mainCtrl.deleteProduct = function (item) {
      PurchaseService.deleteItem(item);
       };
      // mainCtrl.editProduct = function (product) {
      // ProductService.editItem(product)
      //   var editOneProduct = product;
      //   console.log(editProduct);
      //   $scope.newProduct = {};
      // }
    });


})();
