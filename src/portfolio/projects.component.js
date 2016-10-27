(function () {

angular.module('Portfolio')
.component('projects', {
  templateUrl: "src/templates/project-detail.html",
  bindings: {
    projectList: '<'
  }

});

})();
