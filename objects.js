//Everything is an object in javascript.
//Objects are objects
// Maths are objects
// Functions are objects
// Dates are objects
// Arrays are objects
// Maps are objects
// Sets are objects

//All JavaScript values, except primitives, are objects.

//A primitive value is a value that has no properties or methods.


const car=
    {type:"fiat",
     model:"500",
     color:"white"
    };
let x=car;
x.model="600";

const person= new Object();

person.firstname="Malaika";
person.age="24";
person.lastname="Ramzan";
person.fullname=function(){
    return this.firstname + " " + this.lastname;
}

console.log(person.fullname());