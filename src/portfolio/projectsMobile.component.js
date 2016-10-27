(function () {

angular.module('Portfolio')
.component('mobileProjects', {
  templateUrl: "src/templates/projects-mobile.html",
  bindings: {
    projectList: '<'
  }

});

})();
