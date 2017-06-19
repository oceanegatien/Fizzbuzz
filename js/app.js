function fizzbuzz(i) {

		if (i % 15 === 0){
			return "fizzbuzz";
		}
		if (i % 3 === 0){
			return "fizz";
		}
		if (i % 5 === 0){
			return "buzz";
		}

		else{
			return i;
		}
	

}

module.exports = fizzbuzz;