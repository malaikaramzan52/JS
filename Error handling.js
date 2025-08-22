let a = 5;
let b = 10;
console.log("a=", a);
console.log("b=", b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
try {
    console.log("a+b=", a + c);//error
}
catch (err) {
    console.log(err);//error object
}
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);
console.log("a+b=", a + b);

//Error Handling
//try-catch Block
// try{
//     ...normal code
// }
// catch(err){//err is error object
//     ...handling error
// }

//Example
function myFunction() {
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo").value;

    try {
        if (x.trim() === "") throw "empty";   // ✅ fixed
        if (isNaN(x))
            throw "not a number";
        x = Number(x);
        if (x < 5) throw "too low";
        if (x > 10) throw "too high";
    } catch (err) {
        message.innerHTML = "Error : " + err;
    }

}
//Range value between 5 and 10
let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    console.log("Error name: " + err.name);
    console.log("Error message: " + err.message);
}
//Reference value error
let x = 5;
try {
    x = y + 1;
}
catch (err) {
    console.log("Error name: " + err.name);
    console.log("Error message: " + err.message);
}
//Syntax error value 
try {
    console.log(eval("alert('Hello)"));   // Missing ' will produce an error
}
catch (err) {
    console.log("Error name: " + err.name);
    console.log("Error message: " + err.message);
}
//type error 
let n = 1;
try {
    n.toUpperCase();
}
catch (err) {
    console.log("Error name: " + err.name);
    console.log("Error message: " + err.message);
}
finally {
    console.log("I am always run");
}
//URI code 
try {
    decodeURI("%%%");

}
catch (err) {
    console.log("Error name: " + err.name);
    console.log("Error message: " + err.message);
}
//
// finally{
//code that is always run 
// }
//Error includes ---> name and messages


//Examples for Try,catch,finally
function getMonthName(mo) {
    mo--;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (!months[mo]) {
        throw new Error("Invalid month number");
    }
    return months[mo];
}

try {
    monthname = getMonthName(myMonth);
}
catch (err) {
    console.error("Error name: " + err.name);
    console.error("Error message: " + err.message);
}
//Age checker 
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative");
    }

    if (age > 150) {
        throw new Error("Age cannot be greater than 150");
    }
    notDefinedFunction();
}
try {
    let studentAge = 170;
    checkAge(studentAge);
}
catch (err) {
    console.error("Error name: " + err.name);
    console.error("Error message: " + err.message);
}
