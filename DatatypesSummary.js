//Datatypes are divided into Premitive and Non-Premitive
//Categorization depends on 2 things: How the Datatypes are stored and Datatypes are accessed 
//Primtive 
//7 types (Call by value; these are all given but as copies, not the original one; i.e Memory reference is not given):
// String, Number, Boolean, Null (empty; not 0,not empty string), Undefined, Symbol (Used to make values unique), BigInt,

const id= Symbol("123");
const Anotherid= Symbol("123");
console.log(id == Anotherid);
console.log(id === Anotherid)
//Reference type (Non-Premitive): (Memory refence is directly allocated at runtime)
//Arrays, Objects, Functions, 