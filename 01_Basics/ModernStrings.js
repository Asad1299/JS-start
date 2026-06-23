//Sting interpolation
let Name= "Asad"
let age = 18
//console.log(`My name is ${Name} and my age is ${age}`)

const gameName = new String("ADgame")

/*console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase)
console.log(gameName.charAt(3))
console.log(gameName.indexOf('g')) */
let Newstring =new String("String");
let Substring= Newstring.substring(1,-1);
console.log(Substring);
let SlicedString= Newstring.slice(1,-1);
console.log(SlicedString);
//.trim
//.replace('Replace','Replace_with)
url= "www.Asad.com";
u= url.replace('Asad','AD');
console.log(u);
console.log(url.replace('Asad','AD'))
//.includes, checks if the string includes a value or not
//.Split splits a string based on a seperator and a limit
console.log(Newstring.split('r'));
//.anchor, not used today, use DOM API .createElement instead of it
//.at() used to just access an index of a string value, that means it is takes an integer value and returns a new string consisting of the single UTF-16 code unit located at the specified offset. This method allows for positive and negative integers. Negative integers count back from the last string character.
let sentence = "   I am a Student";
let index=5;
console.log(sentence.at(index));
console.log(sentence.trimStart());
//etc...