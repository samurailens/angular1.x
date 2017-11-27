angular.module('authorizeSample', [
    'ui.router',
  ])
  
  .config(function ($stateProvider, $urlRouterProvider) {
  
    $urlRouterProvider.otherwise('/');
  
    $stateProvider
    .state('home', {
      url: '/',
      template: '<h1>Home</h1>'
    })
    .state("login", {
      url: "/login",
      template: '<button ng-click="onLogin()">Login</button>',
      controller: function($scope, $state, Authorization) {
        $scope.onLogin = function() {
          Authorization.go('private');
        };
      }
    })
    .state('private', {
      url: '/private',
      template: '<h1>Private</h1>',
      data: {
        authorization: true,
        redirectTo: 'login'
      }
    })
    .state('secret', {
      url: '/secret',
      template: '<h1>Secret</h1>',
      data: {
        authorization: true,
        redirectTo: 'login',
        memory: true
      }
    });
  
  })
  
  .run(function($rootScope, $state, Authorization) {
  
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      if (!Authorization.authorized) {
        if (Authorization.memorizedState && (!_.has(fromState, 'data.redirectTo') || toState.name !== fromState.data.redirectTo)) {
          Authorization.clear();
        }
        if (_.has(toState, 'data.authorization') && _.has(toState, 'data.redirectTo')) {
          if (_.has(toState, 'data.memory')) {
            Authorization.memorizedState = toState.name;
          }
          $state.go(toState.data.redirectTo);
        }
      }
  
    });
  
    $rootScope.onLogout = function() {
      Authorization.clear();
      $state.go('home');
    };
  })
  
  .service('Authorization', function($state) {
  
    this.authorized = false,
    this.memorizedState = null;
  
    var
    clear = function() {
      this.authorized = false;
      this.memorizedState = null;
    },
  
    go = function(fallback) {
      this.authorized = true;
      var targetState = this.memorizedState ? this.memorizedState : fallback;
      $state.go(targetState);
    };
  
    return {
      authorized: this.authorized,
      memorizedState: this.memorizedState,
      clear: clear,
      go: go
    };
  });
  