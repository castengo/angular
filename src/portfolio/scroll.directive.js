(function () {
'use strict';

angular.module('Portfolio')
.directive('scroll', ['$location','$anchorScroll', function ($location, $anchorScroll) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      element.bind('click', function () {
        $location.hash('projects');
        $anchorScroll();
      });
    }
  }
}])

})();
