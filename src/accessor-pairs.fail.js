/*eslint accessor-pairs: ["error", { "getWithoutSet": true }]*/

(function () {

	var o = {
		set a(value) {
			this.val = value
		}
	}

	var o2 = {
		get a() {
			return this.val
		}
	}

	var o3 = {d: 1}
	Object.defineProperty(o, 'c', {
		set: function(value) {
			this.val = value
		}
	})

	var o4 = {d: 1}
	Object.defineProperty(o, 'c', {
		get: function() {
			return this.val
		}
	})

	// Prevent unused var errors from the above
	void o
	void o2
	void o3
	void o4

})()

