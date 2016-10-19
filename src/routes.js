(function () {

angular.module('Portfolio')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');

  // Set up UI states
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.html'
    })

    .state('education', {
      url: '/education',
      templateUrl: 'src/templates/section.html',
      controller: 'SectionController as section',
      resolve: {
        section: ['SectionService', function (service) {
          return service.getEducation();
        }]
      }
    })

    .state('courses', {
      url: '/courses',
      templateUrl: 'src/templates/section.html',
      controller: 'SectionController as section',
      resolve: {
        section: ['SectionService', function (service) {
          return service.getCourses();
        }]
      }
    })

    .state('experience', {
      url: '/experience',
      templateUrl: 'src/templates/section.html',
      controller: 'SectionController as section',
      resolve: {
        section: ['SectionService', function (service) {
          return service.getExperience();
        }]
      }
    })

    .state('projects', {
      url: '/projects',
      templateUrl: 'src/templates/projects.html',
      controller: 'SectionController as section',
      resolve: {
        section: ['SectionService', function (service) {
          return service.getProjects();
        }]
      }
    })

    .state('projects.project', {
      url: '/{projectNumber}',
      templateUrl: 'src/templates/project-description.html',
      controller: 'ProjectController as project',
      resolve: {
        project: ['$stateParams','SectionService', function ($stateParams, service) {
          console.log($stateParams.projectNumber);
          return service.getCertainProject($stateParams.projectNumber);
        }]
      }
    })


    // .state('categories', {
    //   url: '/categories',
    //   templateUrl: 'src/templates/categories.html',
    //   controller: 'CategoriesController as menu',
    //   resolve: {
    //     categories: ['MenuDataService', function (service) {
    //       return service.getAllCategories();
    //     }]
    //   }
    // })

    // .state('items', {
    //   url: '/items/{shortName}',
    //   templateUrl: "src/templates/items.html",
    //   controller: 'ItemsController as category',
    //   resolve: {
    //     items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
    //       return MenuDataService.getItemsForCategory($stateParams.shortName);
    //     }]
    //   },
    //   params: {
    //     categoryName: ""
    //   }
    // })
}

})();
