//object constructor = is a special method for defining the properties and methods of objects
function Vehicle(make,model,year,color){
    this.make=make,
    this.model=model,
    this.year=year,
    this.color=color
    this.drive=function(){

        console.log(`You drive this ${this.model}` );
    }
}

const car1= new Vehicle("Ford","Mustang",2024,"red");
const car2= new Vehicle("Chevroplet","Camaro",2025,"blue");
const car3= new Vehicle("Dodge","Charger",2026,"silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();
car2.drive();
car3.drive();


//Practice_example_1
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
    


    this.toDisplay = function () {
        console.log(`Student ${this.name} is ${this.age} years old in ${this.grade}`);
    };
}
Student.prototype.nationality="English";
const std1 = new Student("Ali", 21, "14th");
const std2 = new Student("Ahmed", 22, "15th");

console.log(std1);

//std1.nationality="Ensglish";
console.log(`The nationality of student is : ${std2.nationality}`);
std1.toDisplay();
std2.toDisplay();


function Person(firstname,lastname,age,eye){
    this.firstname=firstname;
    this.lastname=lastname;
    this.age=age;
    this.eye=eye;
 
};
const myFather = new Person("John","Doe",50,"brown");
const myMother = new Person("Sally", "Rally", 48, "green");
console.log(`My Father is ${myFather.firstname} ${myFather.lastname} is ${myFather.age} years old and his Eyes color is ${myFather.eye}`);
console.log(`My Mother is ${myMother.firstname} ${myMother.lastname} is ${myMother.age} years old and his Eyes color is ${myMother.eye}`);
// myMother.changename=function(name){
//     this.lastname=name;
// }
// myMother.changename("Doe");
   Person.prototype.changeName = function (name) {
    this.lastname = name;
}

myMother.changeName("Doe");
console.log(`My Mother is ${myMother.firstname} ${myMother.lastname} is ${myMother.age} years old and his Eyes color is ${myMother.eye}`);