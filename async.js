//Synchronous
console.log("Start");
console.log("End");
//executes in a sequence

//Asynchronous 
console.log("one");
console.log("Two");
setTimeout(() => {
    console.log("Hello!!!!!!!!!!!");
}, 4000);//does not wait for previous event to complete .
console.log("Three");
console.log("Four");
//callback
function sum(a,b){
    console.log(a+b);
}
function product(a,b){
    console.log(a*b);
}
function calculator(a,b,callback,productcallback){
    callback(a,b);
    productcallback(a,b);
}
calculator(1,2,sum,product);
//Example 
function greet(name){
    console.log("Hello "+ name);
}
function sayHello(name,greet){
    greet(name);
}
sayHello("malaika",greet);
//example_02
const myNumbers = [4,1,-20,-7,5,9,-6];
const posNumbers = removeNeg (myNumbers,(x) => x > 0);
function removeNeg(numbers,callback){
    const myArray = [ ];
    for(let x of numbers){
        if(callback(x)){
            myArray.push(x);
        }
    }
    return myArray;
}
console.log(posNumbers);


function myfunc(){
    console.log("hello");
}
setTimeout(myfunc(),3000);


//setInterval
// myFunction(); --->atleast one time called before to clear 
let intervalId=setInterval(myFunction,3000);
function myFunction(){
    let d = new Date();
    let date= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    console.log(date);
}
clearInterval(intervalId);

//getNextData
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
       if(getNextData){
        getNextData();
       }
    },2000);
}
//nested callbacks 
//callback Hell
getData(1, ()=>{
    console.log("getting data2 .....");
    getData(2,()=>{
        console.log("getting data3 .....");
        getData(3,()=>{
            console.log("getting data4 .....");
            getData(4);
        });
    });
});


//Practice Examples
async function MyFunc(){
    return "hello";
}

MyFunc().then(result=>console.log(result));

