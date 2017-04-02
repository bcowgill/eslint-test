/*eslint class-methods-use-this: "error"*/
/*eslint-env es6*/

(function (konsole) {

	class A {
		foo() {
			konsole.log('Hello World')     /*error Expected 'this' to be used by class method 'foo'.*/
		}
}

	// Prevent unused var errors from the above
	void A

})()

