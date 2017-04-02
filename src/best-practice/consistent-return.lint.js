/*eslint consistent-return: "error"*/

(function () {

	function doSomething(condition) {
		if (condition) {
			return true
		} else {
			return false
		}
	}

	function Foo() {
		if (!(this instanceof Foo)) {
			return new Foo()
		}

		this.a = 0
	}

	// Prevent unused var errors from the above
	void Foo
	void doSomething

})()
