//Prototype

//A javascript object is an entity having state and behavior (properties and methods).
const student = {
    name: "John",
    age: 21,
    printAge: () => {
        console.log("Age is:", student.age);
    },
};
//prototype--->is an object inside an object
//prototype---->having own properties and methods 


//objects in js inherits some properties snd methods from prototype

const employee = {
    calTax() {
        console.log("Tax is calculated :10%");
    },
};
const karanArjun1 = {
    salary: 50000,
};
const karanArjun2 = {
    salary: 50000,
};
const karanArjun3 = {
    salary: 50000,
};
const karanArjun4 = {
    salary: 50000,
};
//prototype
karanArjun1.__proto__ = employee; //karanArjun is inheriting properties and methods from employee
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
//type of prototype is refrence to an object or null.
const karanArjun5 = {
    salary: 60000,
    calTax() {
        console.log("Tax is calculated :12%");
    },
};
karanArjun5.__proto__ = employee; //karanArjun5 is inheriting properties and methods from employee
//If the object & prototype have same method, then the object method will be called.

//typeof __proto__ ="object"



//////######################################### CLASSES #####################################//////
//Class is a program-code template for creating objects.
//Those objects will have some state (variables) and behavior (functions) inside it.
//JavaScript Classes are templates for JavaScript Objects.


class ToyotaCar {
    constructor(brand,mileage){
        console.log("creating new object");
        this.brandName=brand;
        this.mileage=mileage;
    }
    start() {
        console.log("Car started");
    }
    stop() {
        console.log("Car stopped");
    }
    // setBrand(brand){
    //     this.brandName=brand;
    // }
}
let fortuner = new ToyotaCar("fortuner",10); //creating an object of class ToyotaCar
// fortuner.setBrand("fortuner");
let Lexus = new ToyotaCar("Lexus");
// Lexus.setBrand("Lexus");


////########################################## CONSTRUCTOR ###############################################


//constructor() is reserved word.
//constructor() method is a special method for creating and initializing an object created with a class.
//automatically invoked by new object is created

//initilizes object
//At the time of initiliziation to set the value ....constructor is used.

class car{
    constructor(name,year){
        this.name=name;
        this.year=year;
        console.log("TThe constructor is called");
    }
    yearsOld(){
        const date=new Date();
        return date.getFullYear()-this.year;
    }
}
const myCar = new car("ford", 2015);
console.log(myCar.yearsOld());


//In "strict mode" you will get an error if you use a variable without declaring it
"use strict";
class X{
    constructor(a , b){
           this.sum=a+b;

    }
}
const myX= new X(5,10);
console.log(myX.sum);

//Example_01
class Book{
    constructor(title,author,year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}.`;
    }
}

const Book1=new Book("Book One","John Doe",2020);
const Book2=new Book("Book Two","Lessy Johnson",2021);
console.log(Book1.getSummary());
console.log(Book2.getSummary());

//Example_02
class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;

    }
    getArea(){
        return this.width*this.height;
    }
    getPerimeter(){
        return 2*(this.width + this.height);
    }
}
const rect1=new Rectangle(5,10);
console.log("Area of rectangle:", rect1.getArea());
console.log("Perimeter of rectangle:", rect1.getPerimeter());

//Problem_01
let DATA = "Secrete Data";
class User {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    ViewData(){
        console.log("Data =", DATA);
    }
}
let Student1= new User("John","John@gmail.com");
let Student2= new User("Jane","Jane@gmail.com");
//Problem_2
class Admin extends User {
    constructor(name,email){
        super(name,email);
    }
     editData(){
        DATA = "New Secret Data";
     }
}

let admin1 = new Admin("admin","admin@gmail.com");