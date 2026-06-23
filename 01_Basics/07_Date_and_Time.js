//Dates
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);
// let NewDate = new Date(2026, 0, 23);
// let NewDate1= new Date(2026 ,0, 23, 7,9);
// let NewDate2= new Date("2026-01-23"); //YYYY-MM-DD
// let NewDate3= new Date("01-23-2026"); //MM-DD-YYYY
// let NewDate4= new Date("06-12-2026"); //MM-DD-YYYY
let NewDate5 = new Date(2026, 5, 12);
// let NewDate6= new Date("06-12-26"); //MM-DD-YY
// console.log(NewDate);
// console.log(NewDate1);
// console.log(NewDate2);
// console.log(NewDate3);
// console.log(NewDate4);
// console.log(NewDate4.toString());
// console.log(NewDate5.toString());
// console.log(NewDate6.toString());
// console.log(NewDate5.toDateString());
////---------------------------------
// console.log(NewDate5.toString());
// console.log(NewDate5.toDateString());
// console.log(NewDate5.toISOString());
// console.log(NewDate5.toJSON());
// console.log(NewDate5.toLocaleDateString());
// console.log(NewDate5.toLocaleString());
// console.log(NewDate5.toLocaleTimeString());
// console.log(NewDate5.toTimeString());
// console.log(NewDate5.toUTCString());
let BookingDate = new Date();
let TimeStamp= Date.now(); //Stores the current time from today's date
let BookingTime = BookingDate.getTime();
// console.log(BookingTime);
// console.log(TimeStamp);
//console.log(Math.floor(TimeStamp/1000)); //for getting answer in seconds instead of miliseconds
//To grab any information - we use get.
//console.log(`${BookingDate.getDate()} + ${BookingDate.getDay()} + ${BookingDate.getMonth()}`) //The Day & Month answers will come starting from 0 (not 1)
//console.log(BookingDate.getDay());
BookingDate.toLocaleString('default',{
    month: "long",
    day: NewDate5,
})
console.log(BookingDate);
console.log(typeof BookingDate);