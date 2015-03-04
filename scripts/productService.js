(function () {
  "use strict";
  angular.module('pawsApp') //parent element, all of application is affected
  .factory('ProductService', function($http, $rootScope, $routeParams) {

    var url = 'http://tiy-fee-rest.herokuapp.com/collections/jimmychew';
    // local data set up var products = [
    // {
    //   photo: "http://www.thefastertimes.com/oddjobs/files/2010/03/dog-food.jpg",
    //   name: "Kobe Beef Kibble",
    //   category: "food",
    //   price: "140"
    // },
    // {
    //   photo: "http://ecx.images-amazon.com/images/I/41cy-LQ9zxL._SX425_.jpg",
    //   name: "Honky Pig",
    //   category: "toys",
    //   price: "35"
    // },
    // {
    //   photo: "http://f00.inventorspot.com/images/09.06.16_Spring_August_Coach_Op_Art_Pet_Carrier.img_assist_custom.jpg",
    //   name: "Dog purse by Coach",
    //   category: "accessories",
    //   price: "500"
    // },
    // {
    //   photo: "http://2.bp.blogspot.com/-Rt7HmbQ8tpg/U5qrbRQ8v9I/AAAAAAAAAFU/9XEaOg11lz4/s1600/il_570xN.600123870_8by4.jpg",
    //   name: "Diamond dog collar",
    //   category: "accessories",
    //   price: "3500"
    // },
    // {
    //   photo: "https://s-media-cache-ak0.pinimg.com/236x/59/1f/0d/591f0d7f189a350e41e3be67d3185388.jpg",
    //   name: "Burberry Dog Sweater",
    //   category: "Clothing",
    //   price: "400"
    // },
    // {
    //   photo: "https://s-media-cache-ak0.pinimg.com/736x/4d/f2/df/4df2df66a75dce859807e56cb13af1ed.jpg",
    //   name: "Chanel Dog Bowls",
    //   category: "accessories",
    //   price: "425"
    // },
    // {
    //   photo: "http://www.blackshoppingchannel.net/xcart/images/P/LV%20Big%20Dog%20full%20size.jpg",
    //   name: "Louis Vuitton Jacket",
    //   category: "clothing",
    //   price: "1500"
    // },
    // {
    //   photo: "http://thingd-media-ec2.thefancy.com/default/272172771_ec2744952078.jpg",
    //   name: "Gucci Dog Shoes",
    //   category: "clothing",
    //   price: "537"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/Mink-Fur-Coat-for-Dogs.jpg",
    //   name: "Mink Fur coat",
    //   category: "clothing",
    //   price: "725"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/22k-Gold-Thread-Pet-Mattress.jpg",
    //   name: "22k Gold Dog Bed",
    //   category: "Accessories",
    //   price: "3000"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/Versace-Barocco-Pet-Bowl.jpg",
    //   name: "Versace Pet Bowl",
    //   category: "Accessories",
    //   price: "760"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/Louis-XV-Pet-Pavilion.jpg",
    //   name: "Louis XV Pet Pavilion",
    //   category: "Accessories",
    //   price: "23990"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/Sexy-Beast-Dog-Perfume.jpg",
    //   name: "Dog Perfume",
    //   category: "grooming",
    //   price: "65"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/dog-tiara.jpg",
    //   name: "Pet Tiara",
    //   category: "Accessories",
    //   price: "4200000"
    // },
    // {
    //   photo: "http://incrediblethings.com/wp-content/uploads/2009/07/i-love-dogs-52-carat-Diamond-Dog-Collar.jpg",
    //   name: "52-Carat Diamond Collar",
    //   category: "Accessories",
    //   price: "1800000"
    // },
    // {
    //   photo: "http://wac.450f.edgecastcdn.net/80450F/nj1015.com/files/2012/06/Sugarplum-Princess-Pet-Bed.png",
    //   name: "Princess Castle",
    //   category: "Accessories",
    //   price: "1200"
    // }
    // ];
    //many product images from http://www.incrediblethings.com/lists/14-ridiculously-expensive-pet-products/

    var getProducts = function () {
      //return products; //returns array
      return $http.get(url); //server data
    };
    var addProduct = function (item) {
      //products.push(item); //adds new item info to array of products^^
      $http.post(url, item);

    };
    var deleteProduct = function (id) {
    // console.log("delete triggered");
    // var idx = products.indexOf(item);
    // products.splice(idx, 1);
    $http.delete(url + '/' + id); //all calls of function must have (id) not (index)
     };
    //  var editProduct = function (item) {
    //    console.log('edit triggered');
    //
    //    products.splice(this, 1, item)
  var getSingleItem = function (id) {
    return $http.get(url + '/' + id);
    //return products[index];
    //console.log("in services");
  };
  var editItem = function (id) {
    console.log("edit start");
    $http.put(url + '/'+ id);
    // var idx = products.indexOf(item);
    // console.log(item);
    // console.log(products[idx]);
    // products[idx] = item;
  }

    return {
      getItems: getProducts, //left is public, right is only usable for factory/service function
      addItem: addProduct,
      deleteItem: deleteProduct,
      getItem : getSingleItem, //right is defined in service, left is for use elsewhere in app
      editProduct: editItem
    };

  });

})();
