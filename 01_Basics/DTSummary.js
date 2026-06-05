//Datatypes are divided into Premitive and Non-Premitive
//Categorization depends on 2 things: How the Datatypes are stored and Datatypes are accessed 
//Primtive 
//7 types (Call by value; these are all given but as copies, not the original one; i.e Memory reference is not given):
// String, Number, Boolean, Null (empty; not 0,not empty string), Undefined, Symbol (Used to make values unique), BigInt,

const id= Symbol("123");
const Anotherid= Symbol("123");
//console.log(id == Anotherid);
//console.log(id === Anotherid)

 const bigNumber =BigInt(84271492652059262105);
const bigNumber1 =84271492652059262105n; //Methods for BigInt


//Reference type (Non-Premitive): (Memory refence is directly allocated at runtime)
//Arrays, Objects, Functions, 
const heros= ["Osman1","Tipu Sultan","Saladin"] //ARRAY
//Objects ; "Key:value" Pairs
let myObj= {
   name :"Asad",
    Age : 18,
}  // Datatype can be: Str, num, boolean, function, array, object
//Function can be treated like variable
function myfunction(){};
let Value = myfunction();
//console.log(typeof myfunction);
//console.log(typeof myObj);
//console.log(typeof heros);

//Stack Memory (Primitive), Heap (Non-Premitive)
//Variable copy given -1
//Reference of the original value given -2

let myYoutubeName= "AD writes";
let AnotherName= myYoutubeName;
 AnotherName= "Hussain";
console.log(AnotherName);
console.log(myYoutubeName);

let obj1= {
    name: "MWF"
}
let obj2= obj1;
obj1.name="MUL"
console.log(obj1.name)