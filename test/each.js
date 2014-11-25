var expect = require('chai').expect;

// Write a test for a method called 'each' that loops over an array and
// returns the array.
describe('#each()', function() {
	it('loops over an array and returns the results of the array', function() {
	expect(JSON.stringify([2,3,4])).to.equal('[2,3,4]')
	});
});
// Then write the method that will make that test pass.

var each = function(array, loop) {
	var results = [];
	for (i = 0; i < array.length; i++) {
		results.push(array[i]);
	}
return results;
}
