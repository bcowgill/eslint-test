/*eslint consistent-return: "error"*/

(function () {

	function doSomething(condition) {
		if (condition) {
			return true
		} else {
			return
		}
	}

	function doSomething2(condition) {
		if (condition) {
			return true
		}
	}

	function foo(callback) {
		if (callback) {
			return void callback()
		}
    // no return statement
	}

	function bar(condition) {
		if (condition) {
			return undefined
		}
    // no return statement
	}
	// Prevent unused var errors from the above
	void foo
	void bar
	void doSomething
	void doSomething2

})()

