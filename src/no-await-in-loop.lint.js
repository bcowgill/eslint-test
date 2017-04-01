/*eslint no-await-in-loop: "error"*/

(function () {

	function bar (thing) { return thing.toUpperCase() }
	function baz (thing) { return thing.toLowerCase() }

	async function foo(things) {
		const results = []
		for (const thing of things) {
			// Good: all asynchronous operations are immediately started.
			results.push(bar(thing))
		}
		// Now that all the asynchronous operations are running, here we wait until they all complete.
		return baz(await Promise.all(results))
	}

	// Prevent unused var errors from the above
	void foo

})()
