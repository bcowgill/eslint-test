/*eslint array-callback-return: "error"*/

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

