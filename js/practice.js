// // function practice (str){
// //     let vows = ['a','e','i','o','u']
// //     let vowCount = 0
// //     for (let i of str){
// //         if(vows.includes(i)){
// //             vowCount++
// //         }

// //     } 
// //     return vowCount
// // }

// // console.log(practice('Hello'))


// // function practice (num) {
// //     for(let i =1; i < num; i++){
// //         if (i % 5 !== 0){
// //             console.log(i)
// //         }
// //     }
// // }

// // practice(10)

// let word = ''
// let words = []
// while(word !== 'stop'){
//     words = prompt('Enter a word')
//     words.push(word)
// }
// words.pop()
// console.log(words)


// function repeatS (a,b){
//     return b.repeat(a)
// }

// p takes a string
// r returns a new string with vowels removed
// e the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// p seperate string into array use forEach loop with a condition to push nonvowels then join to create a string again
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