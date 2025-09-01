//Spread operator is used to expand and or Object literals
//####################################### Spread Operator #########################################
//Spread ---->expand elements
//Spread ----->unpack an elements from a bag.

let arr1 = [1,2,3];
let arr2 = [...arr1,4,5,6];
console.log(arr2);

//Object literals 
const obj1={
    name:"John",
    age:30
};
let obj2 ={
    ...obj1,
    city:"New York"
};
console.log(obj2);

//Copy an array
let arr3 = [...arr1,...arr2];
console.log(arr3);

let numbers = [10,15,20];
console.log(Math.max(...numbers));
//#################################### Rest Operator ######################################
// 👉 Collects multiple elements into a single array/variable.
// 👉 Used in function parameters or destructuring.
//Rest ---> Collect 
//Rest--> Packing an elements in a bag

function sum(...nums){
    return nums.reduce((a,b) => a + b, 0);
}
console.log(sum(1,2,3,4,5));

//👉 All arguments are collected into the nums array.

//Array destructuring
let arr4 = [6,7,8];
let [first,...rest]=arr4;
console.log(first);
console.log(rest);

//Object destructuring
const obj3={
    name:"Alice",
    age:25,
    city:"Los Angeles"
};
let {name,...age}=obj3;//It also gives age and city
console.log(name);
console.log(age);

function multiply(factor,...numbers){
    return numbers.map(nums=>nums*factor);
}
console.log(multiply(2,1,2,3,4,5));