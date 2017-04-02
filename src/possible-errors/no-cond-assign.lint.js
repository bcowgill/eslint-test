/*eslint no-cond-assign: ["error", "always"]*/

(function () {
	// Assignment replaced by comparison
	var x
	if (x === 0) {
		var b = 1
	}

	// Prevent unused var errors from the above
	void b
	void x

})()
