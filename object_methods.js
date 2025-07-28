const person={
    firstname:"Malaika",
    lastname:"Ramzan",
    age:20,
    nationality:"Pakistani",
    fullname: function(){
        return (this.firstname + " " + this.lastname).toUpperCase();
    }
};
console.log(person);
console.log(person.fullname());

//practice_question_1
const calculator={
    a:2,
    b:4,
    add:function(){
        return this.a + this.b;
    },
    sub:function(){
        return this.a - this.b;
    },
    mul:function(){
        return this.a * this.b;
    }
}
console.log(calculator.add());
console.log(calculator.sub());
console.log(calculator.mul());
//practice_question_2

const employee={
    fullname:"Mohsin Saeed",
    skills:['java','python','C','C++'],
    contact:{
      email:"mohsin@gmail.com",
      phone: "0300-123456"
    }
};
console.log("Fullname :"+ employee.fullname);
console.log("Skills :" + employee.skills[0]);
console.log("Contact :" + employee.contact['email']);
//practice_question_3
const car={
    brand:"fiat",
    model:"500",
    price:"1500$"
};
car.brand="Mehran";
let prop="brand";
console.log(car[prop]);
let m="model";
console.log(car[m]);
let p="price";
console.log(car[p]);

console.log(car['brand']);
