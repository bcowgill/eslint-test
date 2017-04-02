/*eslint accessor-pairs: ["error", { "getWithoutSet": true }]*/

(function () {

	var o = {
		set a(value) {
			this.val = value
		},
		get a() {
			return this.val
		}
	}

	var o2 = {d: 1}
	Object.defineProperty(o, 'c', {
		set: function(value) {
			this.val = value
		},
		get: function() {
			return this.val
		}
	})

	// Prevent unused var errors from the above
	void o
	void o2

})()
