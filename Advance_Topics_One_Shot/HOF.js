//Higher Order Function
//A higher-order function is a function that either receives another function as a parameter or returns a new function, or does both.
//Used in task that consumes more time
function greet(name){
    return `Hello,${name}!`;
}
function processUserInput(callback){
    let name="Malaika";
    console.log(callback(name));
}

processUserInput(greet);
//Example_02
function multiplier(factor){
    return function(number){
        return number * factor;
    };
}
const double = multiplier(2);
console.log(double(5));
//A function that accept a function as an argument or return a function know as high order function.
function add(a,b,callback){
    let result= a + b;
    callback(result);
    return ()=>console.log(result);
}
let resultFunction = add(2,4,() => { });
resultFunction();

function repeat(n,fn){
    for(let i=0;i<n;i++)
        fn(i);
    }

    repeat(3,i=>console.log("run",i));
    repeat(4,i=>console.log(i*i));
// add(2,4,function(val){
//     console.log(val);
// });

// Using built-in HOFs

const nums = [1,2,3,4,5];
//map
const doubled = nums.map(x=>x*2);
console.log(doubled);

//filter
const evens = nums.filter(x=>x%2===0);
console.log(evens);

//filters

const sum= nums.reduce((acc,x)=>acc+x,0);
console.log(sum);
//greaterThan() is higher order function because it returns an another function
function greaterThan(n){
return function(x){
    return x>n;};
}
const greaterThan3 = greaterThan(3);
console.log([1,2,3,4,5,6].filter(greaterThan3));

