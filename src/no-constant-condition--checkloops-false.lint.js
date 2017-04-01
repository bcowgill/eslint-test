/*eslint no-constant-condition: ["error", { "checkLoops": false }]*/

(function () {
	function doSomething () {}
	function condition () {}

	while (true) {
		doSomething()
		if (condition()) {
			break
		}
	}

	for (;true;) {
		doSomething()
		if (condition()) {
			break
		}
	}

	do {
		doSomething()
		if (condition()) {
			break
		}
	} while (true)

})()
