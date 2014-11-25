var expect = require('chai').expect;

// Write a test for a method called 'flatten' that loops over a nested array
// and returns a new array that is not nested, but contains the same elements
// as the original array.
describe('#flatten()', function() {
	it('loops over nested array and returns a new array that is not nested', function() {
		expect(flatten([[1,2,3], [3,4,5]])).to.equal([1,2,3,3,4,5]);
	});
});
// Then write the method that will make that test pass.
 var flatten = function (ArrayA, ArrayB){
 	for ( var i=0; i<=ArrayA.length; i++) {
 		var combine = ArrayB[i];
 	}
 	return combine;
 }