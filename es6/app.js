
//Importing Angular Library, and Angular Route 
import angular from 'angular';
import angularRoute from 'angular-route';

import MainStyle from './styles.css';

import Router from './router';

// import AllowTabDirective from './directives/allow-tab/allow-tab.directive';

// import CompilerService from './services/compiler/compiler.service';
// import DebounceService from './services/debounce/debounce.service';
// import ExamplesService from './services/examples/examples.service';

import SampleController from './controllers/samplecontroller';
import CynoController from './controllers/cynocontroller.js';

import LocationService from './services/location.service.js';
import IpService from './services/ip.service.js';

import  CynoHeaderDirective from './directives/cyno.directive.js'

angular.module('angular-es6', ['ngRoute'])
	.config(Router)

	.directive('cynoheader', () => new CynoHeaderDirective())

    .service('LocationService', LocationService)
    .service('IpService', IpService)

    .controller('SampleController', SampleController)
    .controller('CynoController', CynoController) 