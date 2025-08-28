//setTimeout(function, milliseconds, param1, param2, ...)
const myTimeout = setTimeout(myGreeting, 5000);
function myStopFunction(){
    clearTimeout(myTimeout);
}
function myGreeting(){
    console.log("Hello!");
}
// Example of using setTimeout to call a function after a delay
let timeout;
function myFunction(){
    timeout = setTimeout(alertFunc, 1000);
}
function alertFunc(){
    alert("Hello!!");
}
function startTime(){
    const date = new Date();
    document.getElementById("txt").innerHTML = date.toLocaleTimeString();
    setTimeout(function(){
        startTime();
    }, 1000);
}
setTimeout(startTime, 1000);

//setInterval()
//setIntervals is used to repeatedly call a function or execute a code snippet, with a fixed time delay between each call.

let count = 0;
function sayHello(){
    console.log("Hello" + count);
    count++;
    if(count==5){
    clearInterval(setInt);
}
}
const setInt = setInterval(sayHello, 2000);

// | Feature          | **setTimeout()**                                                                                | **setInterval()**                                                         |
// | ---------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
// | **Definition**   | Runs a function **once** after the given delay.                                                 | Runs a function **repeatedly** at the given interval.                     |
// | **Execution**    | Executes the callback **only one time** (unless you call it again inside itself).               | Executes the callback **continuously** until `clearInterval()` is called. |
// | **Return Value** | Returns a **timeout ID** used with `clearTimeout()`.                                            | Returns an **interval ID** used with `clearInterval()`.                   |
// | **Syntax**       | `setTimeout(callback, delay, ...args)`                                                          | `setInterval(callback, delay, ...args)`                                   |
// | **Cancel**       | `clearTimeout(timeoutID)`                                                                       | `clearInterval(intervalID)`                                               |
// | **Use Case**     | - Delays execution of code.<br>- Run something once after a few seconds.<br>- Debouncing input. | - Repeated tasks (like a clock, auto-save, polling).                      |
// | **Accuracy**     | Can be re-scheduled recursively for **better timing control**.                                  | May **overlap** if the function execution takes longer than the interval. |
// | **Best For**     | One-time delayed tasks.                                                                         | Periodic, repeated tasks.                                                 |
// 