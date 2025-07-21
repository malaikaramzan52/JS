//This function does not have a name and is also called an anonymous function.
//This function is initialized inside a set of round brackets and the parameters can be passed through the round brackets at the end.

(function(){
    date = new Date(),toString();
    console.log(date);
})();

//consists of two expression --->A new Date object is created and assigned to a variable named date.
// Important: No var, let, or const is used, so date becomes a global variable (bad practice). 

// Naming Anonymous Function

(print_name= function(yourname="Geek"){
    console.log("This Function is executed by "+ yourname);
})();


print_name('Malaika');

//The variables inside a self-executing function are not accessible outside of the function. 
// This prevents global space to be filled with an extra variable that is not needed and takes up extra space.
(Print = function(){
    let myname="Geek";
    console.log("This function is executed by "+ myname);
})();

console.log(myname);