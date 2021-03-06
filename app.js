(function () {
  "use strict";

  angular.module('pawsApp', [
    'ngRoute',
    'cart'
    //'comments'
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
    // .when('/shop', {
    //   templateUrl: 'views/shop.html',
    //   controller: 'Controller as mainCtrl'
    // })
    .when('/admin', {
      templateUrl: 'views/admin.html',
      controller: 'MainController as mainCtrl'
    })//end / admin route
    .when('/detail/:itemId', {
      templateUrl: 'views/detail.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/edit/:itemId', {
      templateUrl: 'views/edit.html',
      controller: 'MainController as mainCtrl'
    })
    .when('/faq', {
      templateUrl:'views/customers.html'
    })
    .when('/customers', {
      templateUrl:'views/customers.html'
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
