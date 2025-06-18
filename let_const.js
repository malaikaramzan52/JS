let age=24;
console.log(age);
const pi=3.14;
console.log(pi);
// let a;
// console.log(a);
// const b;
// console.log(b);
// const must be initialized

//scope
//let and const are block scoped

{
    
    console.log(a);
    let a=5;
}

// console.log(a);//it thorows an error 

const array=["mehran","toyta","haval"];
array[0]="audi";
array.push("BMW");
console.log(array);