"use strict";
function greet() {
    console.log(`My name is ${this.name}`);
}
const obj = {
    name: "Malaika Ramzan"
}
greet.call(obj);
// greet.call(null);
//on strict-mode:it should null or undefined.
// on non-strict mode : it should be error like " TypeError".
let x;
x = 4;
console.log(x);
myFunction();
function myFunction() {
    let y;
    y = 45;
    console.log(y);
}


a = 34;//it will not throw an error.
function strict() {
    b = 5;
}
strict();//it will throw an error.

z = {
    p1: 10,
    p2: 20
};
//delete operator only works on object properties, not on variables declared with let, const, or var.
 delete z;
//it throws an error.
//Deleting a variable (or object) is not allowed.
//Deleting a function is not allowed.
//Duplicating a parameter name is not allowed.
//octal literals are not allowed.
 let r= 010;           //this will cause an error.
//octal escape characters are not allowd.
let w= "\000";
//writing to only read only property is no t allowed.