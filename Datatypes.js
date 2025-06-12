//Data Types
//permitive    Non-Permitive
//Permitive(7)
//number
let age=25;
console.log(age);
//number
let price=10.5;
console.log(price);
//string
let fullname="Tony";
console.log(fullname);
//boolean
isFollow=true;
console.log(isFollow);
//undefined
let x;
console.log(x);
//null--->is a object
let y=null;
console.log(y);
//BigInt
let z=BigInt("123");
console.log(z);
//symbol
let b = Symbol("Hello!");
// console.log(b);

//non-permitive---->object-->[array,function]
//object--->collection of values

const student={
    fullname:"Rahol Kumar",
    age:20,
    CGPA:3.85,
    isPass:true
};
student["age"]=student["age"]+1;
console.log(student["age"]);
student.fullname="Amir Kumar";
console.log(student.fullname);

//key--->fullname,age,CGPA,isPassS
// let---->updated
// const--->not updated
// const object-keys---->updated