/*eslint consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

(function () {

	function foo(callback) {
		if (callback) {
			return void callback()
		}
		return true
	}

	function bar(condition) {
		if (condition) {
			return undefined
		}
		return true
	}

	// Prevent unused var errors from the above
	void foo
	void bar

})()
