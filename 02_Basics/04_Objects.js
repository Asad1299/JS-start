const tinderUser = new Object(); //Singleton
const tinderUser1 = {}; //Non-Singleton/Literal
tinderUser.name = "Asad";
tinderUser.age = 20;
tinderUser.surname = "Farhan";
console.log(tinderUser);
const JsUser= {
    //name: "Asad",
    fullname: {
        userfullname: {
            firstname: "Asad",
            lastname: "Ul Haq",
        }
    },
    Email: "ulhaqasad4@hotmail.co.pk",
}
console.log(JsUser.fullname.userfullname.firstname);

//Object.assign
const Obj1 = {1:"a", 2:"b"}

const Obj2 = {3:"a",4:"d"}

const Obj3 = Object.assign({},Obj1,Obj2);
console.log(Obj3);
console.log(Obj3===Obj1);
// A more simple way to do it, is again the spread method we learnt
const Obj4= {...Obj1,...Obj2};
console.log(Obj4);
//Pov: Value comes from the database
//When it comes from database, it usually comes in the form of array of objects
const Users = [
    {
        id:1,
        name: "Ahmed",
        email:"Ah@gmail.com"
    },
    {
        id:2,
        name: "Abid",
        email:"Ab@gmail.com"
    },
    {
        id:3,
        name: "Asad",
        email:"AD@gmail.com"
    },
]
console.log(`Emails are: ${Users[1].email} & ${Users[2].email} \n`);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
const UserKeys = Object.keys(tinderUser);
const UserValues = Object.values(tinderUser);
console.log(UserKeys);
console.log(Array.isArray(UserKeys));
const Userinfo = {...UserKeys,...UserValues};
console.log(UserKeys)
console.log(UserValues)
console.log(Userinfo);
const Obj5 = {1:"a", 2:"b"}
const Arr1= Object.keys(Obj5);
const Obj6 = {3:"a",4:"d"}
const Arr2 = Object.values(Obj5);
const Arr3 = {...Arr1,...Arr2}
console.log(Arr3);

// Output: { '0': 'a', '1': 'b' }

/*
Why?

Arrays are objects in JavaScript.

Arr1 = ["1", "2"]
When spread into an object:

{
  '0': '1',
  '1': '2'
}

Arr2 = ["a", "b"]
When spread into an object:

{
  '0': 'a',
  '1': 'b'
}

The spread operator works from left to right.

So:

{ ...Arr1, ...Arr2 }

first creates:

{
  '0': '1',
  '1': '2'
}

then Arr2 is spread and its properties overwrite the existing
properties with the same keys ('0' and '1').

Final output:

{
  '0': 'a',
  '1': 'b'
}
*/
console.log(Object.entries(tinderUser)); //Every element of the array is a key-value pair