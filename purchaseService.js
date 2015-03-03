(function () {
  "use strict";
  angular.module('pawsApp') //parent element, all of application is affected
  .factory('PurchaseService', function() {
    var purchases = [];
    //many product images from http://www.incrediblethings.com/lists/14-ridiculously-expensive-pet-products/
    var getPurchases = function () {
      return purchases; //returns array
     };
     var addPurchase = function (item) {
       console.log("purch service add purchase")
      purchases.push(item); //adds new item info to array of products^^
      console.log("item purchased", item, purchases.length)
    };
     var removeProduct = function (index) {
     console.log("delete triggered");
     var idx = products.indexOf(item); //angular tracks index automatically
       purchases.splice(index, 1);
    }

    return {
    //public  : private
      getItems: getPurchases,
      addItem: addPurchase,
      removeItem: removeProduct,
    };

  });

})();
