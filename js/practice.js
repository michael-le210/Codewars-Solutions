// function practice (str){
//     let vows = ['a','e','i','o','u']
//     let vowCount = 0
//     for (let i of str){
//         if(vows.includes(i)){
//             vowCount++
//         }

//     } 
//     return vowCount
// }

// console.log(practice('Hello'))


function practice (num) {
    for(let i =1; i < num; i++){
        if (i % 5 !== 0){
            console.log(i)
        }
    }
}

practice(10)