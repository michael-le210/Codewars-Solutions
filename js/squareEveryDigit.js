/*
p accept integer
r returns integer with each digit squared and then concatenate
e run 9119 through the function, 811181 will come out
p turn number into a string, loop through string to square each number then pushto array then join turn back to number
*/


function squareDigits(num){
    let answer = []
    let stringNum = num.toString()
    for (let i of stringNum){
      i = i*i
      answer.push(i)
    }
    
    return Number(answer.join(''))
  }