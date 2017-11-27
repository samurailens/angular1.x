var app = angular.module("cynoApp", []);


app.service("cynoService", function () {

    return {

        amIAvailable: function () {
            return "yes, your are available!!";
        },

        canYouChangeData: function (x) {

            //$http.get("");
            var d = new Date();
            return x + " - " + d.toDateString();
        },


    }
})


app.directive("cynoSure", function(){
    return {
        template : "<h2 style='color:red' ng-show='false'> Cynosure HSR </h2>",
        // restrict : 'A' //E,A,C,
    }
})


app.directive('cynosureTemp', function() {
    return {
      templateUrl: '../templates/cyno-temp.html',
      //template: '<h3> Scoped Area  {{area.name}}</h3>',
      scope : {
        area: '=userarea'
      }
    };
});


app.component('sampleComponent', {

    transclude: true,
    
    template: "<h1>Hello {{$ctrl.name}}!</h1> <button class='btn btn-primary' ng-click='$ctrl.scopedClick();' >Click </button> " ,
    
    bindings: {
         name: "="
    },
    controller: function() {
         console.log(this.name) // -> World

         this.scopedClick = function(){
             console.log('scoped button clicked')
         }
    }
});

app.controller("cynoCtrl", [ "$scope", "cynoService", "$http",  function( $scope, cynoService, $http ){
    $scope.company = "cynosure-inc";
    $scope.isShown = false;
    $scope.area = {
        name : "HSR"
    }

    $scope.city = {
        name : "Banglaore"
    }

    $scope.toggle = function(){
        $scope.isShown  = !$scope.isShown;
    }

    $scope.scopedClick = function(){
        console.log('parent controller scoped click');
    }

} ])