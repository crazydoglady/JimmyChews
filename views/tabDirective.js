(function () {
  "use strict";
  angular.module('cart')
  .directive('tabDirective', function() {
    return {
      restrict: 'E', //E for element, A for Attribute, C for class
      templateUrl: 'product-tabs.html'

    };
    });
})();
