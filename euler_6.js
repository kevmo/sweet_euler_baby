/* Project Euler Problem 6

The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 55^2 = 3025

Hence the difference between the sum of the squares of the
 first ten natural numbers and the square of the sum is 
 3025-385 = 2640.

Find the difference between the sum of the squares of the 
first one hundred natural numbers and the square of the sum.


*/

var sum_squared=0;
squared_sums=0;

function sum_square_difference(num){
	for (i=1;i<=num;i++){
		sum_squared += i;
	};
	sum_squared *=sum_squared;
	for (i=1;i<=num;i++){
		squared_sums += i*i;
	};
	return sum_squared - squared_sums;
};

sum_square_difference(100);