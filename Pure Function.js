//Pure functions return the same output for the same inputs and do not produce side effects. They do not modify state outside their scope, 
// such as modifying global variables, changing the state of objects passed as arguments, or performing I/O operations.

function pureAdd(a,b){
    return a+b;
}
console.log(pureAdd(2,3));

// practice question_1

function square(a){
    return a*a;
}
console.log(square(2));

//practice question_2
function temp(c){
    return (c * 9/5) + 32;
}
// console.log(temp(0));
console.log(temp(100));


//practice question_3

function capital(word){
      return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();

}
console.log(capital("hello"));
console.log(capital("world"));

//practice question_4

function number(arr){
      return arr.filter(n => n%2 === 0);
}
console.log(number([2,3,4,5,6,8]));

//practice question_5


function palindrome(str){
    let cleaned = str.toLowerCase().replace (/[^a-z0-9]/g,'');
    return cleaned === cleaned.split('').reverse().join('');
}
console.log(palindrome("Racecar"));
console.log(palindrome("hello"));


//let cleaned = str.toLowerCase().replace (/[^a-z0-9]/g,'');
//str.toLowerCase()---> converts input to lowercase.
//This is a regular expression that removes all characters except letters (a-z) and digits (0-9).
//The [^a-z0-9] means: match any character not in a-z or 0-9.
//The g (stands for global) flag means: replace all such characters, not just the first.
//replace with space .