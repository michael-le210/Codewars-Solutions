// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.


// takes in an number variable
// get length of number, then pow each number then add each pow to see if it is equals to the number variable
// returns true or false whether the inputted number is a Narcissistic Number.
// (isNarcissistic(153), true);
// (isNarcissistic(1), true);
// (isNarcissistic(435), false);
// (isNarcissistic(370), true);
// (isNarcissistic(324), false);

function isNarcissistic(n) {

    const strNum = n.toString();
    const numberLength = strNum.length;
    const arrDigits = strNum.split('');

    const pwrArrDigits = arrDigits.map(num => num ** numberLength);

    const sum = pwrArrDigits.reduce((acc, curr) => acc + curr, 0);
    
    return ( n === sum ? true : false) ;
    
}