(function () {

angular.module('Portfolio')
.component('section', {
  templateUrl: "src/templates/section-detail.html",
  bindings: {
    title: '<',
    image_url: '<imageUrl',
    image_webpage:'<imageWebpage',
    description: '<',
    frameworks: '<'
  }

});

})();
