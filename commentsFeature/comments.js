(function () {
  "use strict";
  angular.module('comments', {
    'ngRoute',
  })

    .config(function ($routeProvider){
      $routeProvider
      .when('/comments', {
        templateUrl: '/commentsFeature/comments.html',
        controller: 'CommentsController as comCtrl'
      })



//do not write below this line
    });

    })();
