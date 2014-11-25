var expect = require('chai').expect;

// Write a test for a method called 'uniq' that returns all unique elements
describe('#uniq()', function() {
	it('returns all elements of a given array without duplicates', function() {
		expect(JSON.stringify(uniq([1,1,2,2,3,3]))).to.equal("[1,2,3]");
	});
});
// of an array, i.e. without duplicates.
// Then write the method that will make that test pass.


var uniq = function (occurence) {
	occurence = occurence.sort(function (a, b) { return a*1 - b*1; });
	var ret = [occurence[0]];
	for (var i = 1; i < occurence.length; i++) {
		if (occurence[i-1] !== occurence[i]) {
			ret.push(occurence[i]);
		}
	}
	return ret;
}
