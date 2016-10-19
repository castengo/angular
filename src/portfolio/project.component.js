(function () {

angular.module('Portfolio')
.component('projects', {
  templateUrl: "src/templates/project-detail.html",
  bindings: {
    project_list: '<projectList',
  }

});

})();
