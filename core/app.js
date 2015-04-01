(function () {
  "use strict"
  angular.module('moarDirectives', [
  'ngroute'
  ])

  .config(function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'core/views/main.html',
      controller: 'CoreController as coreCtrl'
    })
    .when('/404', {
      templateUrl: 'core/views/404.html',
    })
  })
})();
