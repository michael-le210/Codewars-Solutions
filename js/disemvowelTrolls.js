// p takes a string
// r returns a new string with vowels removed
// e the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// p create variable for vowel use for loop to loop through string use condition to push nonvowels then join to create a string again


function disemvowel(str) {
    let vow = ['a','e','i','o','u','A','E','I','O','U'] 
    let newA = []
    for(let i of str){
      if(!vow.includes(i)){
        newA.push(i)
      }
      }


    
    return newA.join('');
  }

  console.log(disemvowel('This website is for losers LOL!'))