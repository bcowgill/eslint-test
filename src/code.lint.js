;/*e s l i n t no-compare-neg-zero: "error"*/

(function (x) {

	if (x === 0) {
		// doSomething()...
	}

	if (Object.is(x, -0)) {
		// doSomething()...
	}

})()
;/*e s l i n t no-console: ["error", { allow: ["warn", "error"] }] */

(function () {

//	console.log('Log a debug level message.')
	console.warn('Log a warn level message.')
	console.error('Log an error level message.')

})()
;/*e s l i n t no-constant-condition: ["error", { "checkLoops": false }]*/

(function () {
	function doSomething () {}
	function condition () {}

	while (true) {
		doSomething()
		if (condition()) {
			break
		}
	}

	for (;true;) {
		doSomething()
		if (condition()) {
			break
		}
	}

	do {
		doSomething()
		if (condition()) {
			break
		}
	} while (true)

})()
;/*e s l i n t no-await-in-loop: "error"*/

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
;/*e s l i n t no-console: "error"*/

(function (konsole) {

	// represents a custom console log
	konsole.log('Log a debug level message.')

})()
;/*e s l i n t no-constant-condition: "error"*/

(function (x, a, b) {

	function doSomething () {}
	function doSomethingForever () {}

	if (x === 0) {
		doSomething()
	}

	var result = x !== 0 ? a : b

	// Prevent unused var errors from the above
	void result
	void forever1
	void forever2

	for (;;) {
		doSomethingForever()
	}

	function forever1 () {
		while (typeof x === 'undefined') {
			doSomething()
		}
	}

	function forever2 () {
		do {
			doSomething()
		} while (x)
	}

})()
;/*e s l i n t no-cond-assign: "error"*/

(function () {
	// Assignment replaced by comparison
	var x
	if (x === 0) {
		var b = 1
	}

	// Practical example that wraps the assignment in parentheses
	function setHeight(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode))
	}

	// Practical example that wraps the assignment and tests for 'null'
	function setHeight2(someNode) {
		'use strict'
		do {
			someNode.height = '100px'
		} while ((someNode = someNode.parentNode) !== null)
	}

	// Prevent unused var errors from the above
	void b
	void setHeight
	void setHeight2

})()
;/*e s l i n t no-cond-assign: ["error", "always"]*/

(function () {
	// Assignment replaced by comparison
	var x
	if (x === 0) {
		var b = 1
	}

	// Prevent unused var errors from the above
	void b
	void x

})()
;/*e s l i n t dot-location: ["error", "object"]*/

(function (object) {

	var foo = object.
		property
	var bar = object.property

	// Prevent unused var errors from the above
	void foo
	void bar

})()
;/*e s l i n t complexity: ["error", 2]*/

(function () {

	function a(cond, x) {
		if (cond) {
			return x
		} else {
			return 4
		}
	}

	// Prevent unused var errors from the above
	void a

})()

;/*e s l i n t accessor-pairs: ["error", { "getWithoutSet": true }]*/

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
;/*e s l i n t class-methods-use-this: "error"*/
;/*e s l i n t-env es6*/

(function () {

	class A {
		foo() {
			this.bar = 'Hello World' // OK, this is used
		}
}

	class A2 {
		constructor() {
        // OK. constructor is exempt
		}
}

	class A3 {
		static foo() {
        // OK. static methods aren't expected to use this.
		}
}

	// Prevent unused var errors from the above
	void A
	void A2
	void A3

})()
;/*e s l i n t array-callback-return: "error"*/

(function (myArray, nodes) {

	var indexMap = myArray.reduce(function(memo, item, index) {
		memo[item] = index
		return memo
	}, {})

	var foo = Array.from(nodes, function(node) {
		if (node.tagName === 'DIV') {
			return true
		}
		return false
	})

	var bar = foo.map(node => node.getAttribute('id'))

	// Prevent unused var errors from the above
	void indexMap
	void bar

})()

;/*e s l i n t consistent-return: "error"*/

(function () {

	function doSomething(condition) {
		if (condition) {
			return true
		} else {
			return false
		}
	}

	function Foo() {
		if (!(this instanceof Foo)) {
			return new Foo()
		}

		this.a = 0
	}

	// Prevent unused var errors from the above
	void Foo
	void doSomething

})()
;/*e s l i n t consistent-return: ["error", { "treatUndefinedAsUnspecified": true }]*/

(function () {

	function foo(callback) {
		if (callback) {
			return void callback()
		}
    // no return statement
	}

	function bar(condition) {
		if (condition) {
			return undefined
		}
    // no return statement
	}

	// Prevent unused var errors from the above
	void foo
	void bar

})()
;/*e s l i n t curly: "error"*/

(function (foo, bar, baz, qux) {
	if (foo) {
		foo++
	}

	while (bar) {
		baz()
	}

	if (foo) {
		baz()
	} else {
		qux()
	}

})()


;/*e s l i n t accessor-pairs: "error"*/

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
;/*e s l i n t default-case: "error"*/

(function (a) {

	switch (a) {
	case 1:
		/* code */
		break

	default:
		/* code */
		break
	}


	switch (a) {
	case 1:
		/* code */
		break

	// no default
	}

	switch (a) {
	case 1:
		/* code */
		break

	// No Default
	}

})()
;/*e s l i n t block-scoped-var: "error"*/

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
;/*e s l i n t dot-location: ["error", "property"]*/

(function (object) {

	var foo = object
.property
	var bar = object.property

	// Prevent unused var errors from the above
	void foo
	void bar

})()

