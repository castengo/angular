(function () {
'use strict';

angular.module('Portfolio')
.controller('ProjectController', ProjectController);

ProjectController.$inject = ['project'];
function ProjectController(project) {
  var projectInfo = this;
  projectInfo.name = project.name;
  projectInfo.description = project.description;
  projectInfo.frameworks = project.frameworks;
  projectInfo.url = project.url;

};

})();
