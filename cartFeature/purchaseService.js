(function () {
  "use strict";

  angular.module('cart') //parent element, all of application is affected
  .factory('PurchaseService', function() {
    var purchases = [];

    var getPurchases = function () {
      return purchases; //returns array
     }
     var addPurchase = function (item) {
       console.log("purchase service add purchase")
      purchases.push(item); //adds new item info to array of products^^
      console.log("item purchased", item, purchases.length)
    }
     var removeProduct = function (index) {
     console.log("delete triggered");
     var idx = purchases.indexOf(index); //angular tracks index automatically
       purchases.splice(index, 1);
    }

    var getTotal = function() {
    
    }

    return {
    //public  : private
      getItems: getPurchases,
      addItem: addPurchase,
      removeItem: removeProduct,
      getPurchaseTotal: getTotal
    };

  });

})();
