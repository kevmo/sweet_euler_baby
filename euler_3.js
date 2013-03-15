/*
PROJECT EULER problem 3

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

------

Pseudo-code (Sieve of Eratosthenes)

Input: an integer n > 1
 
Let A be an array of Boolean values, indexed by integers 2 to n,
initially all set to true.
 
for i = 2, 3, 4, ..., √n :
  if A[i] is true:
    for j = i2, i2+i, i2+2i, ..., n:
      A[j] := false
 
Now all i such that A[i] is true are prime.

*/

function make_primes_Obj(n){
	var obj ={};
	for (var i = 2; i<= n; i++){
		obj.i = true;
	}
	return obj;
};


function primes(n){
	var obj = make_primes_Obj(n);
	for (var i = 2; i< Math.sqrt(n); i++){
		if (obj[i] === true){
			for (var j = Math.pow(i,2); j<n; j= j+i){
				obj[j] = false;
			}
		}
	}
	return obj;
};

function largest_factor(n){
	var obj = primes(n);
	var x = 2;
	for (var i = 2; i<Math.sqrt(n); i++){
		if (obj[i]===true){
			if (n % i ===0 && i >x){
				x = i;
			}
		}
	}
	return x;
};

console.log(largest_factor(600851475143))













