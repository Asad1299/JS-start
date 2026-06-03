let score= null;
console.log(typeof score);
console.log(score);
let AnotherNumber = Number(score);
console.log(typeof AnotherNumber);
console.log(AnotherNumber); 

//All the mentioned datatypes, when converted into number, give (and their genuine datatypes are also mentioned):
// "33" => 33
// "33ab" => NaN (not a number, but its type is number😂)
// true => 1
// false => 0
// null => 0 (datatype is object)
//undefined => NaN (data type is also "undefined")

let IsLoggedIn = "Asad";
let BooleanLoggedin= Boolean(IsLoggedIn);
console.log(BooleanLoggedin);
console.log(typeof BooleanLoggedin); 

// Number converted to Boolean:
// 1 => true, 0 => false (datatype became boolean)
// "" => false
// "Asad" => true

let Somenumber = 33;
let stringnumber = String(Somenumber);
console.log(stringnumber);
console.log(typeof stringnumber);  

/**********Operations*************/
/*let str1= "Hu";
let str2= " Hu";
let str3 = str1+str2;
console.log(str3);
console.log("1"+2);
console.log(1+"2");
console.log("1"+"2");
console.log(1+2);
console.log(1+2+"2"); 
console.log("1"+(2+2));
console.log("1+2"+(3+4));*/
console.log(+true); //don't write such a code
console.log(+false);
console.log(+"");
//Assignment: postfix and prefix from mdn docs
//tc39 7.1 