//JSON Object Literals
let arr = '["Ford","BMW","Fiat"]';
let myArr = JSON.parse(arr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
//Array in an object
let myobj ={
"name":"John",
"age":30,
"cars":["Ford", "BMW", "Fiat"]
};
console.log(myobj.cars[1]);
//Looping through an array in an object 
let x = "";
for (let i in myobj.cars){
    x += myobj.cars[i] + ",";
}
console.log(x);
//also used for loop
let y=" ";
for(let i=0; i<myobj.cars.length; i++){
    y += myobj.cars[i] + ",";
}
console.log(y);