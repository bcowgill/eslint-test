/*eslint complexity: ["error", 2]*/

(function () {

	function a(cond, x) {
		if (cond) {
			return x
		} else if (!cond) {
			return x+1
		} else {
			return 4 // 3rd path
		}
	}

	// Prevent unused var errors from the above
	void a

})()

