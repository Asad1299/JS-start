const Arr= new Array("p1",2,3,"\"$%\"$%\"",0,23,3);
//console.log(Arr[`1`]);
//Shallow copies are made when we use Array-copy
//Array Methods:
// Arr.push(6);
// Arr.pop();
//Arr.unshift(9); //Add this in the start - Useful in case of no large data or explicit requirement like to-dos
//Arr.shift();
// console.log(Arr.includes(9));
// console.log(Arr.indexOf(9));
// //console.log(Arr);
// console.log(Arr);
// console.log(Arr.join())
//Slice vs Splice
const NewArr = Arr.slice(1,4);
const NewArr1= Arr.splice(1,4);
//console.log(`${NewArr}  ${NewArr1}`);
const NewArr2 = Arr.splice(1,0,88);
console.log(NewArr2);
console.log(Arr);
/*Splice
Original Array
      │
      ├── Remove
      ├── Insert
      ├── Replace
      └── Change the original
It's basically the "surgery" method.*/
