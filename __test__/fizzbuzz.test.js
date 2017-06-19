var fizzbuzz = require('../js/app.js');

test('fizz', function(){
	expect(fizzbuzz(3)).toBe("fizz");
});

test('buzz', function() {
	expect(fizzbuzz(5)).toBe("buzz");
});

test('fizzbuzz', function(){
	expect(fizzbuzz(15)).toBe("fizzbuzz");
});

test('i', function(){
	expect(fizzbuzz(1)).toBe(1);
});