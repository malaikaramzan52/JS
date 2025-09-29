//functionName.call(thisValue, arg1, arg2, ...)
const person = {
    name: "malaika",
    greet: function () {
        console.log(`My name is ${this.name}`);
    }
}
person.greet();

const person1 = {
    name: "ramzan"
};

person.greet.call(person1);
//We took the greet method from person1
//Used .call() to run it as if it belongs to person2
//this inside greet became person2


//call() with Arguments

function introduce(city, country) {
    console.log(`My name is ${this.name} I am from ${city} , ${country}`)

};

const person3 = {
    name: "Malaika Ramzan"
};

introduce.call(person3, "Multan", "Pakistan");


//practice_examples_1
const car = {
    brand: "tesla",
    show: function (speed) {
        console.log(`${this.brand} is runing on ${speed} km/h`);
    }
};

car.show(100);
const bike = {
    brand: "Honda"
};
car.show.call(bike, 1550);

//pratice_example_2
function sayHello() {
    console.log(`Hello , My name is ${this.name}`);
}

const obj = {
    name: "malaika"
};

sayHello.call(obj);
sayHello.call(null);
//using strict or non-strict 
function sayHelloNostrict() {
    console.log(`No strict ,Hello My name is ${this.name}`);
}
const myname = {
    name: "malaika"
};
sayHelloNostrict.call(myname);
//window.name = "Browser Window";
sayHelloNostrict.call(null);
//window.name in browsers is a special property — it’s not undefined,
// it’s actually an empty string "" by default (unless you’ve set it to something).


//Examples
const Student ={
    name:"Malaika ",
    introduce:function(){
        console.log(`Hello I am ${this.name}`);
    }
}
Student.introduce();