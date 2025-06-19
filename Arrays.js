// Arrays
//collections of items 
//store data linearly
//same type of data
//array is special type of object
//array-->mutable

// let marks=[12,13,14,15,78,45,90];

// marks[3]=44;
// console.log(marks);
// console.log(marks.length);

let heros=['Ali','Amir','Subhan','waleed','mohsin'];
console.log(heros);
console.log(heros.length);

//Array indices



// Array Elements Can Be Objects
// JavaScript variables can be objects. Arrays are special kinds of objects.

// Because of this, you can have variables of different types in the same Array.

// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:

let mixed=[
    10,
    "text",
    {myname:"malaika"},
    [1, 2, 3],
    function sayhi(){
        console.log("hi");
    }
];
console.log(mixed[2].myname);
console.log(mixed[3][1]);
console.log(mixed[4]());


let numbers=[1,3,6,8,0,9,6,3];
let result=numbers.sort();
console.log(result);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];

//for loop

// let elements=['mouse','mobile','pen','book'];
// for(let i=0 ; i < elements.length ; i++){
//       console.log(elements[i]);
// }


// for-of loop

//  let elements=['mouse','mobile','pen','book'];
//  for(i of elements){
//     console.log(i);
//  }


 //for-in
let elements=['mouse','mobile','pen','book'];

for(let i in elements){
    console.log(i);
}

//practice question_1
//average of an array
// [85,97,44,37,76,60]


let marks =[85,97,44,37,76,60];
console.log(marks.length);
let sum=0;
let avg;

for(let i=0;i<marks.length;i++){
    sum=sum+marks[i];
}
avg=sum/marks.length;
console.log(`avg of ${marks} is ${avg}`);

//Practice Question_2
//[250,645,300,900,50]
let items=[250,645,300,900,50];
for(let i=0;i < items.length ;i++){
    let offer =items[i]/10;
    items[i]=items[i]-offer;
}
console.log(items);