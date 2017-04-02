/*eslint accessor-pairs: "error"*/

(function () {

	var o = {
		set a(value) {
			this.val = value
		}
	}

	var o2 = {d: 1}
	Object.defineProperty(o, 'c', {
		set: function(value) {
			this.val = value
		}
	})

	// Prevent unused var errors from the above
	void o
	void o2

})()
