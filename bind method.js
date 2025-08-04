//The bind() method creates a new function that, when called, has its this value set to the value you provide.
//It does NOT call the function immediately — it just gives you a copy of the function with the this value fixed (bound).
//functionName.bind(thisArg, arg1, arg2, ...)
const person={
    name:"Sara",
    greet:function(){
        console.log(`Hello,my name is ${this.name}`);
    }
};
// const greetFn =person.greet();
// greetFn();

const boundFn=person.greet.bind(person);
boundFn();

//practice_example_01
const student={
    name:"Ayesha",
    greet:function(greeting,subject){
        console.log(`${greeting} My name is ${this.name} and I am studing ${subject}`);
    }
};

const intro=student.greet.bind(student,"Hi");
intro ("Computer Science");

//practice_Example_2

const user={
    name:"Malaika",
    sayName:function(){
        console.log(this.name);
    }
}
//setTimeout(user.sayName,1000);-->undefined this is lost;
setTimeout(user.sayName.bind(user),1000);//display after 1 sec;

// Key point: Without bind(), this can change depending on how the function is called.
//With bind(), the this value is fixed to the object forever for that bound function.