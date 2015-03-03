(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('MainController', function ( ProductService, $scope, $routeParams, $location) {
      var mainCtrl = this;

      mainCtrl.products = ProductService.getItems();

      mainCtrl.singleItem = ProductService.getItem($routeParams.itemIndex);

      mainCtrl.addProduct = function (newItem) {
        ProductService.addItem(newItem);
        $scope.newProduct = {};
      }
      mainCtrl.deleteProduct = function (item) {
      ProductService.deleteItem(item);
      $scope.newProduct = {};
       };
       mainCtrl.editItem = function (item) {
         ProductService.editItem(item, $routeParams.itemIndex);

       }
      // mainCtrl.editProduct = function (product) {
      // ProductService.editItem(product)
      //   var editOneProduct = product;
      //   console.log(editProduct);
      //   $scope.newProduct = {};
      // }
    });


})();
