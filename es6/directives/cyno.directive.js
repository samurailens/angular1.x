export default class CynoHeaderDirective {


    constructor() {
        let linkFunction = (scope, element) => {

            element.bind('mouseover', (event) => {

                console.log(event)
                event.preventDefault();
                return false;
            })
        }

        let directive = {
            restrict: 'A',
            link: linkFunction,
            template : "<h2 style='color:red'> Cynosure HSR </h2>"
        };

        return directive;
    }

    // controller($scope) {
    //    console.log($scope)
    // }

    // link(scope, element, attrs) {
    //     console.log(scope)
    // }
}


// export default class CynoFooterDirective {

//     constructor() {
//         this.restrict = 'E'
//         this.template = "<h2 style='color:red' ng-show='false'> Cynosure HSR </h2>"
//         this.scope = {}
//     }

//     controller($scope) {
       
//     }

//     link(scope, element, attrs) {
//         console.log('state', scope)
//     }
// }