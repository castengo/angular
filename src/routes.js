(function () {

angular.module('Portfolio')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$anchorScrollProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider, $anchorScrollProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Prevent auto scrolling after using anchorScroll()
  $anchorScrollProvider.disableAutoScrolling();

  // Set up UI states
  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })

    .state('projects', {
      url: '/projects',
      views: {
        "": {
          templateUrl: 'src/templates/project-section.html',
          controller: 'ProjectListController as projectList'
        },
        'projectList': {
          templateUrl: 'src/templates/projects.html',
          controller: 'ProjectListController as projectList'
        }
      },
      resolve: {
        projects: ['DataService', function (service) {
          return service.getSection('Projects');
        }],
        projectList: ['DataService', function (service) {
          return service.getAllProjects();
        }],
      }
    })

    .state('contact', {
      url: '/contact',
      templateUrl: 'src/templates/contact.html',
      // controller: 'SectionController as section',
    })

    .state('section', {
      url: '/{title}',
      templateUrl: 'src/templates/section.html',
      controller: 'SectionController as section',
      resolve: {
        section: ['$stateParams','DataService', function ($stateParams, service) {
          return service.getSection($stateParams.title);
        }]
      }

    })

    .state('projects.project', {
      url: '/{id}',
      views: {
        'projectDetail': {
          templateUrl: 'src/templates/project-description.html',
          controller: 'ProjectController as project'
        }
      },
      resolve: {
        project: ['$stateParams','DataService', function ($stateParams, service) {
          return service.getCertainProject($stateParams.id);
        }]
      }
    })

}

})();
