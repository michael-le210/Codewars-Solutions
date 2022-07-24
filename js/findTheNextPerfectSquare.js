// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square






/*
p a integer
r -1 is integer inputted is not a perfect square or the next perfect square if a perfect square is entered
e 121 --> 144 or 114 --> -1 since 114 is not a perfect square
p condition if integer entere is perfect square or not, if perfect sqaure return the next perfect square, if not return -1
*/


function findNextSquare(sq) {
  
    if (Math.sqrt(sq) % 1 === 0){
      let nextNum = Math.sqrt(sq)
      nextNum++
      return nextNum*nextNum
    } else {
      return (-1)
    }
    
    
    // Return the next square if sq is a perfect square, -1 otherwise
    return -1;
  }