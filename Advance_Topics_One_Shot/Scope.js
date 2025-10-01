//Scope 
//Where a variable is visible and accessible in your code 
//If a variable is declared inside a function, you can only use it inside that function

console.log("Malaika");

function MyFunction(){
   let message = "Hello";
   console.log(message);
}
//console.log(message); Error:message is not defined
MyFunction();

//Clousers
//A function remembers the variables from where it was created, even if that function is used outside its original scope.
function outer(){
    const x = 10;

    function inner(){
        console.log(x);
    }
    return inner;
}
let innerFunc = outer();
innerFunc();

//Clousers are very powerful because thay allow you to :Encapsulate data (hide variables):

function counter(){
    let count=0;//private variable
    return function(){
        count++;
        console.log(count);
    };
}
const myCounter = counter();
myCounter();
myCounter();
myCounter();
myCounter();
myCounter();
