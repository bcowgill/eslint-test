/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

(function () {

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

})()
