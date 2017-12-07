import SampleController from './controllers/samplecontroller';
import CynoController from './controllers/cynocontroller.js';

export default function routerConfig ($provide, $routeProvider) {
  $provide.factory('$routeProvider', function () {
      return $routeProvider;
  });

  $routeProvider
    .when('/', {
      name: 'samplecontroller',
      template: '<div class="container"> <h2>Template - inline </h2> <button class="btn btn-warning" ng-click="controller.click();"> button </button> </div>',
          controllerAs: SampleController.getControllerTemplateName(),
       controller: SampleController,
    })

    .when('/cyno', {
        
        name: 'samplecontroller',
        templateUrl: './templates/cyno.template.html',
        controllerAs: CynoController.getControllerTemplateName(),
        controller: CynoController,
    })
    .otherwise({
      redirectTo: '/'
    });
}