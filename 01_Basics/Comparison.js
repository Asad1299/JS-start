//console.log(5<2);
// == , <=, >= , <, >, !=
//These are simple
//The problem arises when you need to compare two different datatypes
//console.log("2">1);
//Keep in mind and try to compare two same datatypes. This is not allowed in Typescript but allowed in Javascript
//console.log(null>0);
//console.log(null<0);
//console.log(null ==0);
console.log(null <=0); //Here comes the conversion problem
console.log(null >=0); //Comparisons convert null into a number, treating it as a 0
//Same problem occurs with undefined
console.log(undefined==0);
console.log(undefined <= 0);
// === strict check "2"===2 evaluates to false
//These types of comparisons are avoided and they can cause confusion
