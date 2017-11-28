var app = angular.module("cynoApp", ["ngRoute"]);

app.value('apiToken', 'somethingHere')
app.constant('appName', 'CynosureApp')

// app.provider('remoteAPIToken', function remoteAPITokenProvider(){

//     var isValidToken = true;
// })

app.service("AuthService", function(){

    isAuthValid = false;

    return {
        isLoggedIn : function(){
            return isAuthValid;
        },

        doLogin : function(){
             isAuthValid = true;
             return isAuthValid
        },

        doLogout : function(){
            isAuthValid = false;
            return isAuthValid
        }
    }
})

app.run(function ($rootScope, $location, AuthService) {

   
    var openRoutes = ['/login', '/home'];

    //checks with our openRoutes, if matched, no problem, else redirect to login
    var validateOpenroute = function (route) {
        return _.find(openRoutes,
            function (noAuthRoute) {
                console.log('route', route)
                console.log('noAuthRoute', noAuthRoute)
                console.log('route.startsWith(noAuthRoute);', route.startsWith(noAuthRoute))
                return route.startsWith(noAuthRoute);
            });
    };

    $rootScope.$on('$routeChangeStart', function (event, next, current) {

        // if route requires auth and user is not logged in
        if (!validateOpenroute($location.url()) && !AuthService.isLoggedIn()) {

            // Ask user to login
            $location.path('/login');
        }
    });
});

app.config(

    ['$routeProvider',  "appName",
        function ($routeProvider, appName) {
            console.log('config')
            //console.log('apiToken in Config', apiToken)
            console.info('appName', appName)
            $routeProvider.when('/home',
                {
                    templateUrl: '../templates/home.html',
                    controller: 'routeController'
                }
            ),

                $routeProvider.when('/admin/:cyno123',
                    {
                        templateUrl: '../templates/admin.html',
                        controller: 'routeController'
                    }
                ),

                $routeProvider.when('/login', 
                    {
                        templateUrl: '../templates/login.html',
                        controller: 'routeController'
                    }
                )
                $routeProvider.when('/guest',
                    {
                        templateUrl: '../templates/guest.html',
                        controller: function ($scope, $location) {
                            $scope.name = 'Cynosure Guest';

                            $scope.inFun = function () {
                                alert('hey')
                            }

                            $scope.guestToHome = function () {

                                $location.path('/home');
                            }
                        }
                    }
                ),
                $routeProvider.otherwise({ redirectTo: '/home' });
        }
    ]
);



app.controller("routeController", [ "$scope", "$route", "$routeParams", "$location","AuthService", "apiToken", function($scope, $route, $routeParams, $location, AuthService, apiToken){


    // Goes upwards
    $scope.$emit('cynoEvent', { 'API_TOKEN': apiToken });

    // Sends downwards
    $scope.$broadcast('cynoEvent', {
        someProp: 'Pub/Sub!' , // could be anything ,
        
    });

    // subscribe and listen
    $scope.$on('cynoEvent', function (event, data) {
        console.log(data); 
    });


    $scope.clickHomebtn = function () {
        console.log($route.current);
        console.log('routeParams', $routeParams)


        // Sends downwards
        // $scope.$broadcast('cynoEvent', {
        //     someProp: 'Pub/Sub!' // could be anything 
        // });

        $scope.$emit('cynoEvent', 'cynosure');
    }

    $scope.clickAdminBtn = function(){
        console.log('routeParams', $routeParams)
        console.log('location', $location)
        console.log('route', $route)
    }

    $scope.guestToHome = function(){

        $location.path('/home');
    }

    $scope.login = function(){
        AuthService.doLogin();
    }

}])



app.controller("parentCtrl", function ($scope) {

    $scope.$on('cynoEventfromChild', function (event, data) {
        console.log("parentCtrl received data from child", data);
    });

    $scope.sendEvent = function(){
        $scope.$broadcast('cynoEventFromParent', 'CynosureHSR'); 
    }

    

})

app.controller("childCtrl", function ($scope) {

    $scope.$emit('cynoEventfromChild', 'emitting from child');

    $scope.$on('cynoEventFromParent', function (event, data) {
        console.log("childCtrl received data from parent", data);
    });

})
