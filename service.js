(function () {
  "use strict";
  angular.module('pawsApp')
  .factory('ProductPageService', function() {
    var products = [
    {
      photo: "url('http://www.fillmurray.com/100/100')",
      name: "Blue Leash",
      category: "accessories",
      price: "35"
    },
    {
      photo: "url('http://www.fillmurray.com/100/100')",
      name: "Hair Ribbon",
      category: "accessories",
      price: "35"
    },
    {
      photo: "url('http://www.fillmurray.com/100/100')",
      name: "Kibble",
      category: "food",
      price: "35"
    },
    {
      photo: "url('http://www.fillmurray.com/100/100')",
      name: "Honky Pig",
      category: "toys",
      price: "35"
    }
    ];

    var getProductsPage = function () {
      return products; //returns array
    };
    var addProduct = function (item) {
      products.push(item); //adds new item info to array of products^^
    }
    return {
      getProducts: getProductsPage, //left of : is public, right is only usable for factory?
      addItem: addProduct
    };

  });

})();
