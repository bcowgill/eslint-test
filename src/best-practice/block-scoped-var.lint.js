/*eslint block-scoped-var: "error"*/

(function (konsole) {

	function doIf(cond) {
		var build

		if (cond) {
			build = true
		}

		konsole.log(build)
	}

	function doIfElse(cond) {
		var build

		if (cond) {
			build = true
		} else {
			build = false
		}
		return build
	}

	function doTryCatch() {
		var build
		var f

		try {
			build = 1
		} catch (e) {
			f = build
		}
		return f
	}

	// Prevent unused var errors from the above
	void doIf
	void doIfElse
	void doTryCatch

})()
