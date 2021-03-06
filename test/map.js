var expect = require('chai').expect;

// Write a test for a method called 'map' that loops over an array
describe('#map()', function() {
	it('returns an array of results', function() {
		var array = [1,2,3];
		var result = map(array, function(a) {
			return a += 1;
		});
	expect(JSON.stringify(result)).to.equal('[2,3,4]')
	});
});
// and returns the result of each operation in a new array.
// Then write the method that will make that test pass.
var map = function(array, callback) {
	var results = [];
	for (i = 0; i < array.length; i++) {
		var outcome = callback(array[i]);
		results.push(outcome);
	}
return results;
}
map([3,4,5], function(a) {
	return a *= 3
});


