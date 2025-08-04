//apply is similler to call() on main difference is this:
//call() → passes arguments individually
//apply() → passes arguments as an array (or array-like object)


//functionName.apply(thisArg, [argsArray])
const person={
    fullName:function(){
        return this.firstname+" "+ this.lastname;
        }
}
const person1={
   firstname:"malaika",
   lastname:"ramzan"
};
console.log(person.fullName.apply(person1));

//SImple example with array

function greet(city,country){
    console.log(`My name is ${this.name} and I am from ${city} ${country}`);
}

const mySelf={
    name:"Malaika Ramzan"
};
greet.apply(mySelf,["Multan","Pakistan"]);
//Example_04
const numbers=[4,9,7,8,3,2];
//Math.max does not take the "this" at all . So, we set this =null, we can also set this=0, " " 
const maxNum =Math.max.apply(null,numbers);
const minNum =Math.min.apply(null,numbers);

console.log("Maximum number :" ,maxNum);
console.log("Minimum number :" ,minNum);

//practice_Example_05
const p1={
    name:"Ayesha",
    greeting:function(greet){
        console.log(`${greet} , My name is ${this.name}`);
    }
}

const p2={
    name:"Sara"
};
p1.greeting.apply(p1,["Hello"]);