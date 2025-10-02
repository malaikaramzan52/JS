//call,apply,bind
//======================================= call ======================================

//Syntax of call
// functionName.call(thisArg, arg1, arg2, ...)
function greet(city,country){
    console.log(`Hello, ${this.name} from ${city} ,${country}`);
}

const person={
    name:"Alice",
    age:16
};

// let result = greet.call(person,"New York","USA");
// console.log(result);

// Apply
//arguments are passed an array 
// functionName.apply(thisArg, [arg1, arg2, ...])

function mySelf(age,city){
    console.log(`Hello, I am ${this.name} and I am ${age} from ${city}`)
}

const myname={
    name:"John"
}
let intro = mySelf.apply(myname,[21,"Uk"]);
console.log(intro);


//bind
//return copy of new function
let bindresult = greet.bind(person,"new York","USA");
bindresult();


//Example
function showDetails(age,city){
    console.log(`Name: ${this.name},Age:${age},City:${city}`);
}

const user1 = {name:"Ali"};
const user2 ={name:"Sara"};

//using call( )
showDetails.call(user1,21,"karachi");

//using apply 
showDetails.apply(user2,[25,"Lahore"]);
//bind
const showAliDetails = showDetails.bind(user1,22,"Islamabad");
showAliDetails();

//Call → Call Now | Apply → Apply Now | Bind → Bind Later