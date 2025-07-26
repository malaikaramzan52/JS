//array method

//map similler to forEach method.  
//difference is that map method creates new array.
//forEach does not create a new array.

//syntax arr.map(callbackFnx(value,index,array))
//map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.

// map() does not change the original array.


let nums = [67, 52, 39];

let newArr = nums.map((val) => {
    // console.log(val);
    return val * 2;
});
console.log(newArr);


const numbers = [4, 9, 25];
let array = numbers.map(Math.sqrt);
console.log(array);

// Multiply all the values in an array with 10:

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = a.map((v) => {
    return v * 10;
});
console.log(b);



const persons = [
    { firstname: "Malcom", lastname: "Reynolds" },
    { firstname: "Kaylee", lastname: "Frye" },
    { firstname: "Jayne", lastname: "Cobb" }
];

let result = persons.map(getfullname);


function getfullname(item) {
    return [item.firstname, item.lastname].join(" ");
}

console.log(result);

//Convert Array of Strings to Uppercase
let fruits = ["apple", "mango", "orange"];
const upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper);


//Extract Names from Array of Objects
const users = [
    { name: "Ali", age: 25 },
    { name: "Sara", age: 22 },
    { name: "Zara", age: 30 }
];

let z=users.map(user=>user.name);
console.log(z);


//Add Index to Each Element
let items=["pencil","eraser","shopner","table"];

let indexitem=items.map((item,index)=>`${index}: ${item}`);
console.log(indexitem);

//Format Prices with Currency

let prices=[10,20,30];
let formatted=prices.map(price=>`$${price.toFixed(2)}`);
console.log(formatted);


//Boolean Array – Check Even Numbers

let n=[2,4,8,9,3];
let output = n.map(m=>m%2===0);
console.log(output);