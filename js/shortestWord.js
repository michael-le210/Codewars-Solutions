/*
Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/

//given a string of words, string will never be empty you do not need to account for different data types.
//return the length of the shortest word(s). 
//findShort("bitcoin take over the world maybe who knows perhaps"), 3
//findShort("turns out random test cases are easier than writing out basic ones"), 3
//findShort("Let's travel abroad shall we"), 2

function findShort(s){
    return Math.min(...s.split(" ").map (s => s.length));
}

OR 

function findShort(s){
    let sArr = s.split(' ')
    return sArr.map( word => word.length).sort((a, b) => a - b).shift();
}
