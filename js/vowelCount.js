/*Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.*/


//The input string will only consist of lower case letters and/or spaces.
//Return the number (count) of vowels in the given string.
//getCount("abracadabra"), 5
function getCount(str) {
    let vow = ['a','e','i','o','u'];
    let vowelsCount = 0;
    for (let i of str) {
      if (vow.includes(i)) 
        vowelsCount++;
    }
    return vowelsCount;
  }