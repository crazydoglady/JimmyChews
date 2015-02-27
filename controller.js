(function () {
  "use strict";
  angular.module('pawsApp')
    .controller('MainController', function ( ProductPageService, $scope) {
      var mainCtrl = this;

      mainCtrl.products = ProductPageService.getProducts();

      mainCtrl.alertMe = function () {
        alert("Hi form mainCtrl");
      };

      mainCtrl.addProduct = function (newItem) {
        ProductPageService.addItem(newItem); 
        $scope.newItem = {};
      };
    });


})();
