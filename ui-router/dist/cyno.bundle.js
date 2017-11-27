/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var app = angular.module("cynoApp", ["ui.router"]);

app.constant('_', window._)

.run(function(_, $rootScope, $state) {
    
      $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        //   console.log('toState', toState)
        //   console.log('toParams', toState)
          
        //   console.log('fromState', fromState)
        //   console.log('fromParams', fromParams)

          console.log('data', toState.data.username)
        // if (!Authorization.authorized) {
        //   if (Authorization.memorizedState && (!_.has(fromState, 'data.redirectTo') || toState.name !== fromState.data.redirectTo)) {
        //     Authorization.clear();
        //   }
        //   if (_.has(toState, 'data.authorization') && _.has(toState, 'data.redirectTo')) {
        //     if (_.has(toState, 'data.memory') && toState.data.memory) {
        //       Authorization.memorizedState = toState.name;
        //     }
        //     $state.go(toState.data.redirectTo);
        //   }
        // }
    
      });
    });

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        //Top Level URL
        .state('home', {
            url: '/home',
            templateUrl: '../templates/home.html',
            controller : 'routeController'
        })

        .state('home.users', {
            url: '/users',
            templateUrl : '../templates/home-users.html',
            controller: function($scope){
                $scope.dogs = ['cynoAdmin', 'CynoGuest', 'CynoUser'];
            },
            data : {
                username : 'cyno-guest'
            }
        })
      
        .state('/login', {
            url: '/login',
            templateUrl : '../templates/login.html',
            controller : 'routeController',
            data : {
                username : 'cyno-guest'
            }
        })

        .state('admin', {
            url: '/admin',
            templateUrl: '../templates/admin.html',
            data: {
                username : 'cyno-guest',
                authorization: true,
                redirectTo: 'login'
            }
        })

        .state('guest', {
            url: '/guest',
            templateUrl: '../templates/guest.html',
            data : {
                username : 'cyno-guest'
            }
        });

});

app.controller("routeController", function($scope, $state){


    $scope.clickHomebtn = function(){
        // console.log($route.current);
        console.log('$state', $state)
       
    }

    $scope.clickAdminBtn = function(){

    }

    $scope.guestToHome = function(){

        $state.go('home')
    }

    $scope.doLogin= function(){

    }
})

/***/ })
/******/ ]);