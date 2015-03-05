(function () {
  "use strict";
  angular.module('ng-modules')
    .directive('testDirective', function() {
      return {
        restrict: 'E', //E for element, A for Attribute, C for class
        scope: { //isolated scope, only available on the directive.
          title: '@' //@-data can come in; = -data is 2-way; &-express or function
          photo:
        },
        templateUrl: 'mainDirectives.html',
        link: function (scope, element, attributes) {
          //this is where jQuery is used with Angular
          element.on('click', function(e) {
            e.preventDefault();
            alert("hi there");
          })
        }
        //template: '<div>hello from the test directive</div>',
        transclude: false //if false the stuff inside gets overwritten and doesn't exist anymore
      }
    });
})();
