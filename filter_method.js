//filter
//Create a new array of elements that gives true for a condition/filter.
//The filter() method creates a new array filled with elements that pass a test provided by a function.

//The filter() method does not execute the function for empty elements.

//The filter() method does not change the original array.



//syntax:
//array.filter(val)

let arr = [1,2,3,4,5,6,7];
let isEven = arr.filter((val)=>{
    return val >= 3;
});
console.log(isEven);

//Return an array of all values in ages[] that are 18 or over:

let ages=[24,18,56,90,12,14];
let adult = ages.filter((age)=>{
    return age>= 18;
});
console.log(adult);