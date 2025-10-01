//Hoisting
//Hoisting means that JavaScript moves all variable and function declarations to the top of their scope

console.log(x);//undefined
var x =10;

// Internally
//var x;        // Declaration is moved to the top (hoisted)
//console.log(x); // undefined (because it's declared but not yet assigned)
//x = 10;       // Assignment stays in place
greet();
function greet(){
    console.log("hello!");
}
// what happens Internally
// JavaScript moves the whole function declaration to the top:
// function greet() {
//   console.log("Hello!");
// }
// greet(); // "Hello!"


//Let ,const are hoisted but Not Initialized

console.log(a);//❌ ReferenceError: Cannot access 'a' before initialization
let a=3;
//TDZ(temporal dead Zone)
//The time between the start of the scope and the line where the variable is declared is called the Temporal Dead Zone (TDZ).
