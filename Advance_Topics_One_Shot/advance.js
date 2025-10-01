// This is a one-shot file for some of the advanced topics in JavaScript.
// 01.Callback
// 1. ======================== Callback ========================
// A callback is a function passed as an argument to another function, which is then executed after some operation is completed.

//Syntax

function myFunction(callback){
    //Perform some operations.....
    callback();
}

myFunction(()=>{
    console.log("Callback executed");
});

//Usecases -> asynchronous operations like reading files,making API calls, or handling events.

function fetchData(callback){
    setTimeout(()=>{
        const data = "Some data from server";
        callback(data);
    }, 1000);
}

fetchData((data)=>{
    console.log("Data Received:", data);
});

//2. ======================== Promises ========================
// Promises are used to handle asynchronous operations more elegantly than callbacks. A promise represents a value that may be available now, in the future, or never.
//Syntax
const promise = new Promise((resolve , reject)=>{
    //Perform some async operation
    let success=true;
    let value="Data fetched successfully";

    if(success){
        resolve(value);
    }else{
        reject(error);
    }
});

promise.then((value)=>{
    console.log("Success:", value);
}).catch((error)=>{
    console.log("Error:", error);
});

//Use case -> handling asynchronous operations like API calls, database queries, etc.
//Example


function fetchDataPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data = "Some data";
            resolve(data);
        },1000);
    });
}

fetchDataPromise().then((data)=>
console.log("Data recived:",data)
).catch((error)=>
console.log("Error:",error)
);

//4.======================== Strict Mode ========================
// Strict modes is a way to opt in to a restricted variant of JavaScript, which can help catch common coding mistakes and "unsafe" actions such as defining global variables accidentally.
// -Prevents common  mistakes like using undeclared variables.


"use strict";
x=10;              // Throws an error because x is not declared
console.log(x);

//Advantages of Strict Mode
// -Prevents accidental global variables declaration.
// -Disallows duplicate parameter names
//  Makes eval and arguments safer

