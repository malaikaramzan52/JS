//IIFE(Immediately Invoked Function Expression)
//IIFE (Immediately Invoked Function Expression) is a function in JavaScript that runs as soon as it is defined — you don’t need to call it separately.

(function(){
    console.log("IIFE executed");
})();

//Uses
//Create a Private scope  
//Avoid polluting the global scope

const counter = (function(){
    let count=0;

    return function(){
        return ++count;
    };
})();
console.log(counter());
console.log(counter());


(function(){
    const userName ="Malaika";
    console.log("Hello"+userName);
})();
console.log(userName);// ❌ Error: userName is not defined