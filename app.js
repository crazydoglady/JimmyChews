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
    .otherwise({
      redirectTo: '/not_found'
    })//end otherwise, this is equivalent to if/else statement in vanilla javascript
  });//end config

})();
