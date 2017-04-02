/*eslint no-cond-assign: "error"*/

(function () {
	// Assignment replaced by comparison
	var x
	if (x === 0) {
		var b = 1
	}

	// Practical example that wraps the assignment in parentheses
	function setHeight(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode))
	}

	// Practical example that wraps the assignment and tests for 'null'
	function setHeight2(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode) !== null)
	}

	// Prevent unused var errors from the above
	void b
	void setHeight
	void setHeight2

})()
