(function () {

angular.module('Portfolio')
.service('DataService', DataService);

DataService.$inject = ['$http'];
function DataService($http) {
    var section = this;

    section.getSection = function(secTitle) {
      return $http( {
        method: "GET",
        url: "/data/sections.json",
        params: {title : secTitle}
      }).then(function (response) {
        response = response.data.sections;
        for (var i = 0; i < response.length; i++) {
          if (response[i].title == secTitle) {
            return response[i];
          }
        }
      }, function(error) {
        console.log("error!");
      })
    };

    section.getAllProjects = function () {
      return $http( {
        method: "GET",
        url: "/data/projects.json"
      }).then(function (response) {
        return response.data.projects;
      }, function(error) {
        console.log("error!");
      })
    }

    section.getCertainProject = function(projectId) {
      return $http( {
        method: "GET",
        url: "/data/projects.json"
      }).then(function (response) {
        return response.data.projects[projectId-1];
      }, function(error) {
        console.log("error!");
      })
    }

}

})();
