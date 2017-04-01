/*eslint no-constant-condition: "error"*/

(function (x, a, b) {

	function doSomethingUnfinished () {}
	function doSomethingForever () {}

	if (false) {
		doSomethingUnfinished()
	}

	if (void x) {
		doSomethingUnfinished()
	}

	for (;-2;) {
		doSomethingForever()
	}

	while (typeof x) {
		doSomethingForever()
	}

	do {
		doSomethingForever()
	} while (typeof x)

	var result = 0 ? a : b

	// Prevent unused var errors from the above
	void result

})()
