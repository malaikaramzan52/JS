//Currying
//Instead of passing all arguments at once, you pass them one by one, and each function returns another function until all arguments are provided.
function add(a){
    return function(b){
        return a+b;
    };
}
let addFive=add(5);// Step 1: Give the first argument (5)
console.log(addFive(10));// Step 2: Give the second argument (10) -> Output: 15


//Example-->Multiply 3 numbers
function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        };
    };
}
// Two ways to display output
console.log(multiply(2)(3)(4));//24
let multwo = multiply(2);     // returns function waiting for b
let mulThree = multwo(3);     // returns function waiting for c
let finalmul = mulThree(4);   // returns final result

console.log(finalmul); // 24