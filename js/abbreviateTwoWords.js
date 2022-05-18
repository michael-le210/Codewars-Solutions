/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F
*/
// takes two words with one space in between them
//output should be two capital letters with a dot separating them.
//(abbrevName("Sam Harris"), "S.H");
//(abbrevName("Patrick Feenan"), "P.F");
//(abbrevName("Evan Cole"), "E.C");
//(abbrevName("P Favuzzi"), "P.F");
//(abbrevName("David Mendieta"), "D.M");

function abbrevName(name){

    return name.split(' ').map( a => a[0].toUpperCase()).join('.')

}