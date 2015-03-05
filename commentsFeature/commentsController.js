(function () {
  "use strict";
  angular.module('comments')
    .controller('CommentsController', function (ProductService, $location, $routeParams) {
      var comCtrl = this;

      CommentsService.getReviews().success(function(data){

      })





//do not alter below this line-closes controller functions
    });


})();
