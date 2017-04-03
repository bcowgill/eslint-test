/*eslint dot-location: ["error", "property"]*/

(function (object) {

	var foo = object
.property
	var bar = object.property

	// Prevent unused var errors from the above
	void foo
	void bar

})()

