/*eslint no-cond-assign: ["error", "always"]*/

(function () {
	// Unintentional assignment
	var x
	if (x = 0) {
		var b = 1
	}

	// Practical example that is similar to an error
	function setHeight(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while (someNode = someNode.parentNode)
	}

	// Practical example that wraps the assignment in parentheses
	function setHeight2(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode))
	}

	// Practical example that wraps the assignment and tests for 'null'
	function setHeight3(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode) !== null)
	}

	// Prevent unused var errors from the above
	void b
	void x
	void setHeight
	void setHeight2
	void setHeight3

})()
