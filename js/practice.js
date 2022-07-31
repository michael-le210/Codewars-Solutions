function practice (str){
    let arrS = str.split(' ')
    return (`${Math.max(...arrS)} ${Math.min(...arrS)}`)
}

console.log(practice("1 2 3 4 5"))


// function practice (num) {
//     let summation = 0
//     for (let i = 1; i <= num; i++){
//         summation = summation + i
//     }
//     console.log(summation)
// }

// practice(8)

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

// function practice (arr){
//     let sum = 0
//     arr.forEach(ele => {
//      if (ele === true){
//           sum ++
//      }
//     });
//     return sum
// }

// console.log(practice([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]))


// let board = 8
// let boardS = ''

// for (let i = 0; i < board; i++){
//     for (let x = 0; x < board; i++){
//         if ((x + i) % 2 === 0) {
//             boardS += ' '
//         } else {
//             boardS += '#'
//         }

//     }
//     boardS += '\n'
// }
// console.log(boardS)

// let word = ''
// let words = []
// while(word !== 'stop'){
//     word = prompt("Enter a word")
//     words.push(word)
// }
// words.pop()
// console.log(words)


