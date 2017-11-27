var app = angular.module("cynoApp", ["ui.router"]);

app.constant('_', window._);

app.run(function (_, $rootScope, $state) {

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
            console.log('toState', toState)
            console.log('toParams', toState)
            console.log('fromState', fromState)
            console.log('fromParams', fromParams)
            console.log('data', toState.data.username)
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