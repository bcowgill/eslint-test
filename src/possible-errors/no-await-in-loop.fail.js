/*eslint no-await-in-loop: "error"*/

(function () {

	function bar (thing) { return thing.toUpperCase() }
	function baz (thing) { return thing.toLowerCase() }

	async function foo(things) {
		const results = []
		for (const thing of things) {
			// Bad: each loop iteration is delayed until the entire asynchronous operation completes
			results.push(await bar(thing))
		}
		return baz(results)
	}

	// Prevent unused var errors from the above
	void foo

})()
