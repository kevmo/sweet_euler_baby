/*
Project Euler Problem 4

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.

Find the largest palindrome made from the product of two 3-digit numbers.

----------

In pseudo-code:

1. Loop through 100-999.  Inside that loop, loop through 100-99.
Create a giant array of these values 
2. Sort these arrays in increasing order.
3. Starting from the end, check for palindromes.  Stop when one is found
> 

SUBSTEPS FOR PALINDROME
- turn each number into a string
- REVERSE NUMBER, SEE IF NUMBER = REVERSE!!!!!!!!!!!!!!!!!!!!!!!!
- split each number into it's own array: arr[i].split("")
*/



//steps 1 and 2
function array_maker(){
	//leave global var for easy console access
	arr = [];
	for (var i = 100; i<1000; i++){
		for (var k=100; k<1000; k++){
			var x = i *k
			arr.push(x);
		};
	};
	// return arr, sort in ascending order
	return arr.sort(function(a,b){return a - b });
};

function find_palindrome(){
	var x = false;
	// get your array
	var arr = array_maker();
	//check for palindromes in arr
	// cycle through array
	var i = arr.length-1;
	while (i > -1 && x === false){
		var number = arr[i] + "";
		var check = arr[i]+ "";
		var check1 = check.split("");
		var check2 = check1.reverse();
		var check3= check2.join("");
		if (number === check3){
			x = true;
		}
		else{
			i--;
		};
	};
	return number;
};

console.log(find_palindrome());



