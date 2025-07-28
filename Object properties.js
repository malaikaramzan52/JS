// objectName.property
//objectName["property"]
//objectName[expression]

const person={
    firstname:"Malaika",
    lastname:"Ramzan",
    age:21,
    CGPA:3.82,
    language:"urdu"

};
// console.log(person);
// delete person['CGPA'];
//The delete keyword deletes both the value of the property and the property itself.
//After deletion, the property cannot be used before it is added back again

//Nested Objects
//Property values in an object can be other objects
myobj={
    Fullname:"Malaika Ramzan",
    age:"21",
    myCars:{
        car1:"Mehran",
        car2:"Haval",
        car3:"Audi"

    }
}
//expression 
let x="age";
let y="Fullname";
console.log(myobj[y]+" is " +myobj[x] +" Years old");
//practice_question_1
const man={
   name:"Ali AKram",
   age:21,
   country:"Pakistan"
};
console.log(man);
//practice _question_2

const Student={
    fullname:"Shahid Abbas",
    class:"5th year",
    address:{
        city:"multan",
        zip: 509876,
        country:"Pakistan"
    }
}
console.log("Student lives in "+ Student.address.city  +  Student.address.country  +  Student.address.zip);
//practice_question_3
const library={
    name:"Garrision",
    books:["truth","honesty","War"]
};
console.log("Library" +" "+library['name']+" " +"has"+ " "+library['books']);