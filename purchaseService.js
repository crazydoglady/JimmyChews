(function () {
  "use strict";
  angular.module('pawsApp') //parent element, all of application is affected
  .factory('purchaseService', function() {
    var purchases = [
      {
        name: 'testItem',
        price: '35'
      }
    ];
    //many product images from http://www.incrediblethings.com/lists/14-ridiculously-expensive-pet-products/
    // var getProducts = function () {
    //   return purchases; //returns array
    // };
    // var buyProduct = function (item) {
    //   purchasess.push(item); //adds new item info to array of products^^
    // };
    // var deleteProduct = function (index) {
    // // console.log("delete triggered");
    // // var idx = products.indexOf(item); //angular tracks index automatically
    // purchases.splice(index, 1);
    // //
    // // };
    // //  var editProduct = function (item) {
    // //    console.log('edit triggered');
    // //
    // //    products.splice(this, 1, item)
    //  }

    return {
      getItems: getPurchases, //left is public, right is only usable for factory/service function
      buyItem: addPurchase,
      removeItem: removeProduct,
      //editItem: editProduct,
    };

  });

})();
