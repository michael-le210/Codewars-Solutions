/*
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
Example:

348597 => [7,9,5,8,4,3]
0 => [0]
*/

//a random non-negative number (n)
//return the digits of this number within an array in reverse order
//(digitize(35231),[1,3,2,5,3]);
//(digitize(0),[0]);
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  
  