/*eslint no-constant-condition: "error"*/

(function (x, a, b) {

	function doSomething () {}
	function doSomethingForever () {}

	if (x === 0) {
		doSomething()
	}

	var result = x !== 0 ? a : b

	// Prevent unused var errors from the above
	void result
	void forever1
	void forever2

	for (;;) {
		doSomethingForever()
	}

	function forever1 () {
		while (typeof x === 'undefined') {
			doSomething()
		}
	}

	function forever2 () {
		do {
			doSomething()
		} while (x)
	}

})()
