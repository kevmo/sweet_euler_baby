/*
PROJECT EULER #10
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below two million.
*/

//Solution uses Sieve of Eratosthenes method.

/* In pseudo-code:
Input: an integer n > 1
 
Let A be an array of Boolean values, indexed by integers 2 to n,
initially all set to true.
 
for i = 2, 3, 4, ..., √n :
  if A[i] is true:
    for j = i2, i2+i, i2+2i, ..., n:
      A[j] := false
 
Now all i such that A[i] is true are prime.
*/

var prime = function(n){
	//initialize object
	var nums = {};
	//initialize sum for answer
	var total_sum=0;
	//index 2 to n, set to true
	for (var i=2; i <= n; i++){
		nums[i] = true;
	};
	//kill all the multiples of any true power, starting
	//at two
	for (var j=2; j<= Math.sqrt(n); j=j+1){
		if (nums[j] === true){
			for (var k=Math.pow(j,2); k<=n; k +=j){
				nums[k]=false
			}
		}
	};
	//add up all the true values
	for (var f=2;f<=n; f++){
		if (nums[f]===true){
			total_sum += f;
		}
	};
	return total_sum;
};

console.log(prime(2000000));