function practice (str){
    let arrS = str.split(' ').map( a => a.length)
    return Math.min(...arrS)
}

console.log(practice("This is the shortest word"))


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
//    return arr.map((ele,ind) => `${ind + 1}: ${ele}`)
// }

// console.log(practice(["a", "b", "c"]))


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


