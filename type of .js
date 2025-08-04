// there is a bug in js that is it returns type of null is an object 
//null is primitive datatypes.
//The typeof operator returns object for all types of objects:

// objects
// arrays
// sets
// maps
const fruits = ["apple", "mango", "oranges"];
console.log(Array.isArray(fruits));
const person = {
    name: "malaika"
};
console.log(Array.isArray(person));
//the instance of operator 

const time = new Date();
console.log((time instanceof Date));
console.log((fruits instanceof Array));
console.log((person instanceof Object));


const items = new Map([
    ["apples", 500],]);
console.log((items instanceof Map));
const name = new Set(["Malaika"]);
console.log((name instanceof Set));

//undefined
let car = "Mehran";
car = undefined;
console.log(typeof car);
//Empty value
let a = " ";
console.log(typeof car);
//Null
let p = null;
console.log(typeof p);

console.log(typeof undefined);
console.log(typeof null);
console.log(null === undefined);
console.log(null == undefined);
//Constructor property
console.log(("john").constructor);
console.log((123).constructor);
console.log((true).constructor);
console.log((1234n).constructor);
console.log(({ }).constructor);
console.log(([ ]).constructor);
console.log((new Date()).constructor);
console.log((new Set()).constructor);
console.log((new Map()).constructor);
console.log((new function(){}).constructor);
//With the constructor, you can check if an object is an Array:
console.log((fruits.constructor===Array));
//Date

let d= new Date();
console.log(d);
console.log((d.constructor===Date));

//Type of NaN is a number.

let x;
x = typeof('John' +35);
console.log(x);

y=typeof(['apple','mango']);
console.log(y);








typeof null
typeof {
    name: "john"
}