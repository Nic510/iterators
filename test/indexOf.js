var expect = require('chai').expect;

// Write a test for a method called 'indexOf' that returns the index of
describe('#indexOf()', function() {
	it('returns the index of a given element of an array', function() {
		expect(indexOf([1,2,3], 2)).to.equal(1);
	});
});
// a given element of an array.
// Then write the method that will make that test pass.
var indexOf = function(array, element){
	for (i = 0; i < array.length; i++) {
		if (element === array[i]) return i;
	}
}