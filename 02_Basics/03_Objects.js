//Singleton
//Singleton is an object of its own type. It is made when we declare objects like a constructor
//Otherwise it if is declared as a literal, it can have one or more instances - No Singleton
//It is done as Object.create
//Now, Object Literals:
const JsUser = {
    name: "Asad",
    age: 19,
    email: "asad9@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
};
//console.log(JsUser.email) - This method is valid but not the best method
//This is a better method:
//console.log(JsUser["email"])
//This is more valid because if we have "email" not just email as a key in our object, then it is impossible to access it via . method
const JsUser1 = {
    name: "Asad",
    age: 19,
    "email": "asad9@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"],
};
//console.log(JsUser1["email"]);
//Now let's learn to declare symbols as "keys" in objects
const email= Symbol("email")
const JsUser2= {
    name: "Ahmed",
    [email]: "ahmed9@gmail.com",
    greeting: "",
};
const JsUser3= {
    name: "Ahmed",
    [email]: "ahmed9@gmail.com",
    greeting: "",
};
//console.log(JsUser2[email]);
//Object.freeze:
//Object.freeze(JsUser2);
// console.log(JsUser2);
JsUser2.greeting =function(x=JsUser2,name){
    console.log(`This is ${x} from MWF`);
}
console.log(JsUser2.greeting());
JsUser3.greeting =function(){
    console.log(`This is ${this.name} from MWF`);
}
console.log(JsUser3.greeting());