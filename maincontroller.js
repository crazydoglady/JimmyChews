(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('MainController', function (ProductService, $location, $routeParams) {
      var mainCtrl = this;

      ProductService.getItems().success(function(data){
        //console.log(data);
        mainCtrl.products = data;
      });
      ProductService.getItem($routeParams.itemId).success(function(data){
        //console.log("This is what we pass in:" + $routeParams.itemId);
        mainCtrl.singleItem = data;
        //console.log("This is what we get back:" + data);
        //console.log(data);
        //console.log($routeParams.itemId);
      });

      // ProductService.getItem();
      //local data methodmainCtrl.singleItem = ProductService.getItem($routeParams.itemId);

      mainCtrl.addProduct = function (newItem) {
        ProductService.addItem(newItem);
        //$scope.newProduct = {};
      }
      mainCtrl.deleteProduct = function (item) {
      ProductService.deleteItem(item);
      //$scope.newProduct = {};
       };
       mainCtrl.editItem = function (item) {
         ProductService.editProduct(item, $routeParams.itemId);
         $location.path('/admin');
       }
      // mainCtrl.editProduct = function (product) {
      // ProductService.editItem(product)
      //   var editOneProduct = product;
      //   console.log(editProduct);
      //   $scope.newProduct = {};
      // }
    });


})();
