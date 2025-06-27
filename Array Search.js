//indexOf()
//array.indexOf(item, start)
let fruits=['Orange','mango','Grapes','banana','apple'];
let position=fruits.indexOf('apple')+1;//1 is for user ease
//include method
//array.includes(search-item)
let include=fruits.includes('mango');//return true or false

//Array.includes() allows to check for NaN values. Unlike Array.indexOf().

let arr=[1,2,3,4,5,NaN,9,10];
let check=arr.includes(NaN);
let check1=arr.indexOf(NaN);//return-1


//find()--->find() gives the first element that matches your condition.

let numbers=[4,9,16,25,29];
// let find=numbers.find(myFunction);

function myFunction(value,index,array){
    // console.log(value);
    // console.log(index);
    // console.log(array);
    return value > 18;
}

//findIndex()--->gives the first index of an element that matches your condition.
let find=numbers.findIndex(myFunction);


//findLast()---> gives the last element that matches your condition.

let temp=[27,28,30,40,42,35,30];
// let high=temp.findLast(x=> x > 40);

// findLastIndex()--->gives the last index of element that matches your condition.
let high=temp.findLastIndex(x=> x > 40);




