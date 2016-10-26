(function () {
'use strict';

angular.module('Portfolio')
.controller('ProjectListController', ProjectListController);

ProjectListController.$inject = ['projects', 'projectList'];
function ProjectListController(projects, projectList) {
  var projectsInfo = this;
  projectsInfo.title = projects.title;
  projectsInfo.description = projects.description;
  projectsInfo.projectList = projectList;
  // projectsInfo.projectScroll
};

})();
