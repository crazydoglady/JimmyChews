(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('CartController', function (PurchaseService, $scope) {
      var cartCtrl = this;

      cartCtrl.purchases = PurchaseService.getItems();

      cartCtrl.addPurchase = function (newItem) {
        console.log("add to cart triggered", newItem)
        PurchaseService.addItem(newItem);
      }
      cartCtrl.removePurchase = function (item) {
      PurchaseService.removeItem(item);
    };

      // mainCtrl.editProduct = function (product) {
      // ProductService.editItem(product)
      //   var editOneProduct = product;
      //   console.log(editProduct);
      //   $scope.newProduct = {};
      // }
      // return {
      //   // getItem : getPurchases,
      //   addItem : addPurchase,
      //   deleteItem: removePurchase
      // }


    });


})();
