/*
P String, string can contain any character 
R return a boolean and be case insensitive
E XO("ooxx") => true or XO("ooxXm") => true or XO("xooxx") => false
P

*/
// MY WAY
function XO(str) {
    let xs = ['x','X']
    let os = ['O','o']
    let countx = 0
    let counto = 0
    for (let i of str){
      if(xs.includes(i)){
        countx++
      } else if (os.includes(i)){
        counto++
      }
   
    }
      return (countx == counto)
    }

// best codewars 
    function XO(str) {
        return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
    }