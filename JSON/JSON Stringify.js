//object
const obj={
    name:"John",
    age:30,
    city:"New York",
    birth: "1990-01-01"
};
const myJSON  = JSON.stringify(obj);
console.log(myJSON);
//Array
let arr = ["John", "Peter", "Sally", "Jane"];
const myArr = JSON.stringify(arr);
console.log(myArr);
//SToring data 
const myObj = { name: "John", age: 30, city: "New York" };
const myObjJSON = JSON.stringify(myObj);
localStorage.setItem("myObj", myObjJSON);
//Retrieving data 
let text1 = localStorage.getItem("myObj");
let obj1 = JSON.parse(text1);
//Parse: STring to Object 
//Stringify : Object to string 

//All Data Types 
//number
const sum = 123e-5;//-5---> means move 5 times to left like this : '0.00123'
const sumJSON = JSON.stringify(sum);
//Boolean
let bool = new Boolean(0);
const boolJSON = JSON.stringify(bool);
//Date
let date = new Date();
let dateJSON= JSON.stringify(date);
//Function
let func = function(){
    console.log("hello WWorld");
};
let funcJSON = JSON.stringify(func);//undefined
//JSON.stringify() behavior
// If you pass an object containing functions, those functions are ignored.
// If you pass a function directly, JSON.stringify() returns undefined.


