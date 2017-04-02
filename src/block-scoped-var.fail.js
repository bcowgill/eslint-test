/*eslint block-scoped-var: "error"*/

(function (konsole) {

	function doIf(cond) {
		if (cond) {
			var build = true
		}

		konsole.log(build)
	}

	function doIfElse(cond) {
		if (cond) {
			var build = true
		} else {
			var build = false
		}
	}

	function doTryCatch() {
		try {
			var build = 1
		} catch (e) {
			var f = build
			void e
		}
	}

	// Prevent unused var errors from the above
	void doIf
	void doIfElse
	void doTryCatch

})()
