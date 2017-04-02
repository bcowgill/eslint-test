/*eslint class-methods-use-this: "error"*/
/*eslint-env es6*/

(function () {

	class A {
		foo() {
			this.bar = 'Hello World' // OK, this is used
		}
}

	class A2 {
		constructor() {
        // OK. constructor is exempt
		}
}

	class A3 {
		static foo() {
        // OK. static methods aren't expected to use this.
		}
}

	// Prevent unused var errors from the above
	void A
	void A2
	void A3

})()
