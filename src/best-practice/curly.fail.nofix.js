/*eslint curly: "error"*/

(function (foo, bar, baz, qux) {

	if (foo) foo++

	while (bar)
		baz()

	if (foo) {
		baz()
	} else qux()

})()
