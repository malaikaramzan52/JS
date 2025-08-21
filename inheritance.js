class Parent{
    sayHello(){
        console.log("Hello");
    }
}
class child extends Parent{

}
let obj= new child();


class Person{
    constructor(){
        this.species="Human";
    }
    eat(){
        console.log("Eating...");
    }
    sleep(){
        console.log("Sleeping...");
    }
    exercise(){
        console.log("Exercising...");
    }
    work(){
        console.log("DO Nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Working on engineering tasks...");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}

const shradha = new Engineer();
const john = new Doctor();

//If child & Parent have the same method.child's method will be used .[method overriding]

//Example_01
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}
class Students extends person{
    constructor(name,age,grade){
        super(name,age);
        this.grade=grade;
    }
    study(){
        console.log(`I am studying in grade ${this.grade}.`);
    }
}
let me = new Students("Ali", 21,"10th");
console.log(me.study());
console.log(me.introduce());

//Super
//The super keyword is used to call the constructor of its parent class to access the parent's properties and methods.
//super(args)//calls  Parent's constructor

//super.parentMethod(args)

class Car{
    constructor(brand){
        this.carname=brand;
    }
    present(){
        return `I have a ${this.carname}`;
    }
}
class Model extends Car{
    constructor(brand,mod){
        super(brand);
        this.model=mod;
    }
    show(){
        return `${this.present()} of model ${this.model}`;
    }
}

let myCar=new Model("Ford","Mustang");
document.getElementById("demo").innerHTML=myCar.show();



class Student{
    constructor(fullname){
        this.name=fullname;
    }
//getter is used to  read vale of property
//it does not take input just only return property's value
get stname() {
    return this.name;

}
//setter is used to write value of property
//it usually takes one parameter and assign it to the property.
//only takes one parameter.
set stname(x){
    this.name=x;
}
}
const myname=new Student("Ali");
console.log(myname.stname);

//Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property:
//this.__name

//Static

class introduce{
    constructor(name){
        this.name=name;
    }
    // static greet(){
    //     return "Hello!!!";
    // }
     static greet(x){
        return "Hello!!!"+x.name;
    }
}
const intro=new introduce("Hamza");
document.getElementById("static").innerHTML=introduce.greet(intro); 


// document.getElementById("static").innerHTML=introduce.greet(); 
// //Static method can be called without creating an instance of the class

// If you want to use the intro object inside the static method, you can send it as a parameter:


