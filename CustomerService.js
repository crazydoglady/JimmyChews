(function () {
  "use strict";
  angular.module('pawsApp') //parent element, all of application is affected
  .factory('PurchaseService', function() {
    var photos = [ 'assets/happy.jpg', 'assets/timid.jpg', 'assets/saddog.jpg', 'assets/frenchie.jpg', 'assets/curious.jpg', 'assets/fluffy.jpeg', 'assets/happypittie.jpg',  'assets/smile.jpg', 'assets/kingcharles.jpg', 'assets/lab.jpg', 'assets/pug.jpg','http://upload.wikimedia.org/wikipedia/commons/2/22/Dalmatian_dog.jpg', 'https://c2.staticflickr.com/4/3222/3079849093_4ed1806302.jpg', 'http://fc03.deviantart.net/fs70/i/2012/163/0/d/dog_with_glasses_by_danihee-d53949b.jpg', 'https://c2.staticflickr.com/4/3336/3520581061_513a46b869_b.jpg', 'http://fc08.deviantart.net/fs71/f/2013/093/3/f/sad_looking_dog_____by_ashhughes-d609ymi.jpg', 'http://upload.wikimedia.org/wikipedia/commons/e/e9/Big_and_little_dog_1.jpg', 'https://c1.staticflickr.com/5/4073/4821509004_1ef4f169c7_b.jpg', 'https://c1.staticflickr.com/3/2184/2091958278_4e449e44f4_b.jpg','http://upload.wikimedia.org/wikipedia/commons/0/01/Rhodesian_ridgeback.jpg', 'assets/billiebeach.jpg', 'assets/Windy1.jpg', 'assets/ember.jpg', 'assets/anabel.png'];
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
