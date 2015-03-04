//module and routing for cart feature
(function () {
  "use strict";

angular.module('cart', [
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
  .when('/cart', {
    templateUrl:'cartFeature/cart.html',
    controller: 'CartController as cartCtrl'
  })
  .when('/not_found', {
    templateUrl: 'views/not_found.html',
    controller: 'MainController as mainCtrl'
  })
  .otherwise ({
    redirectTo: '/not_found'
  })//end otherwise, this is equivalent to if/else statement in vanilla javascript
});//end config

})();
