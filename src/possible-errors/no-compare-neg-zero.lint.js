/*eslint no-compare-neg-zero: "error"*/

(function (x) {

	if (x === 0) {
		// doSomething()...
	}

	if (Object.is(x, -0)) {
		// doSomething()...
	}

})()
