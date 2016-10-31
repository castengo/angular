(function () {

angular.module('Portfolio')
.component('project', {
  templateUrl: "src/templates/project.html",
  bindings: {
    project: '<'
  }

});

})();
