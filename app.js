(function () {
  "use strict";

  angular.module('pawsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainController as mainCtrl'
    })//end / route
    .when('/shop', {
      templateUrl: 'views/shop.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'MainController as mainCtrl'
    })//end / admin route
    .when('/not_found', {
      templateUrl: 'views/not_found.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/cart', {
      templateUrl:'views/cart.html',
      controller: 'CartController as cartCtrl'
    })
    .otherwise ({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})();
