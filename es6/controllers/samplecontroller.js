export default class SampleController {
	constructor() {
		console.log('loading sampleController')

		//Destructuring assignment
		var [a, ...b] = [5, 10, 15, 20, 25];

		console.log(a);
		console.log(b);

		//Arrays Destructuring
		var data = ['apple', 'orange', 'banana', 'berry'];

		var [ a, o ] = data;
		console.log(a);
		console.log(o)

		//Objects and Destructuring objects
		var obj = {str: 'some string', status: true};
		var {str, status} = obj;
		
		console.log(str); // some string
		console.log(status); // true

		var o = {str: 'some string', status: true};
		var {str: stringObj, status: statusObj} = o;

		console.log(stringObj)
		console.log(statusObj)


		//Iteration
		var data = [1, 2, 3, 4, 5]
		for (var n of data) {

			console.log(n);
		}
	}

	click(){
		alert('clicked');
	}

	static getControllerTemplateName() {
		return 'controller';
	}
}
