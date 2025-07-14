//Functions
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

//Functions
//Functions definition-----> do some work
//Functions call/invoke--->call to do work

//to remove redundancy


function myFunction() {
    console.log("Welcome to my WORLD!!!");
}
myFunction();

function para(msg, number) {
    console.log(msg, number);
}
//varaible does not have value will be undefined

para("I love JS", 100);

//value pass to function during function definition---->parameters
//value pass to function during function call----->arguments


function sum(a, b) {
    return a + b;
}
let result=sum(10,20);
console.log(result); // Output: 30
//variale a,b are local variables
//local variables are only accessible within the function
//The statements that written after the return statement will not be executed




//functios-->parameters are local variables of function--->block scope
//function parameters are not accessible outside the function


function myFunction2(p1,p2){
    return p1*p2;
}
let x= myFunction2(3,4);
console.log(x);


//function to celcius
function toCelcius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
let celsius = toCelcius(100);
// console.log(celsius); // Output: 37.77777777777778

console.log(`Fahrenheit to Celsius: ${celsius}`); // Output: Fahrenheit to Celsius: 37.77777777777778







// Question_1

function first(){
    console.log("Welcome to Javascript Functions!");
}
//Question_2:
//to check even or odd number
function isEven(num) {
    return num % 2 === 0;
}
let num = isEven(11);
console.log(`Is the number even? ${num}`); // Output: Is the number even? true


//Question_3:
//to count characters in a string
function countChars(s){
    let count = 0;
    for(let c of s){
        count++;
    }
    return count;
}
//Question_4:
function capitalize(a) {
    let Capitalized = a.charAt(0).toUpperCase() + a.slice(1);
    return Capitalized;
}

//Question_5:
function reverseString(x){
    return x.split('').reverse().join('');
}
//Practice Questions
function countVowels(str){
    let count=0;
    for(let char of str){
      if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A" || char==="E" || char==="I" || char==="O" || char==="U"){
          count++;
      }
    }
    return count;
}



