var app = angular.module("cynoApp", ["ngRoute"]);


app.config( 
    
        [ '$routeProvider', 
            function( $routeProvider){
    
                $routeProvider.when( '/home', 
                    {
                        templateUrl : '../templates/home.html',
                        controller : 'routeController'
                    }
                ),

                $routeProvider.when( '/admin/:cyno123', 
                    {
                        templateUrl : '../templates/admin.html',
                        controller : 'routeController'
                    }
                ),
                $routeProvider.when( '/guest', 
                    {
                        templateUrl : '../templates/guest.html',
                        controller : function($scope, $location){
                            $scope.name = 'Cynosure Guest';

                            $scope.inFun = function(){
                                alert('hey')
                            }

                            $scope.guestToHome = function(){
                                
                                $location.path('/home');
                            }
                        }
                    }
                ),
                $routeProvider.otherwise({redirectTo:'/home'});
            }
        ]
    );

app.controller("routeController", function($scope, $route, $routeParams, $location){

    $scope.clickHomebtn = function(){
        console.log($route.current);
        console.log('routeParams', $routeParams)
    }

    $scope.clickAdminBtn = function(){
        console.log('routeParams', $routeParams)
        console.log('location', $location)
        console.log('route', $route)
    }

    $scope.guestToHome = function(){

        $location.path('/home');
    }
})