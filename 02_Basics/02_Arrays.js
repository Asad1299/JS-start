//Arrays_Part_2
const Heros=["Osman 1","Tipu Sultan","Fatih Sultan"];
const Heros1=["YusufibneTashfin","Saladin","Fahreddin Pasa"];
// Heros.push(Heros1);
// console.log(Heros[3][0]);
// console.log(Heros);
//Concat can also be used to join them
//  const Heros2 =Heros.concat(Heros1);
//  console.log(Heros2);
// //The best and clean method to join is:
// //Spreading method:
// const Heros3= [...Heros,...Heros1];
// console.log(Heros3);

//.flat
const Heros4= [1,2,3,[4,5,6],7,[8,9]];
console.log(Heros4.flat()); //Spread all of the arrays in arrays and flat them

//.from & .of
//.from returns a new array from some value
//.of returns a new array from a set of elements
console.log(Array.isArray("Asad"));
console.log(Array.from("Asad"));
console.log(Array.from({name:"Asad"}))  //Interesting

console.log(Array.of(Heros,Heros1)); //(That set of elements can also be an array)