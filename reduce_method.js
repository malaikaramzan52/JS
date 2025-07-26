// Reduce Method
// Performs some operations & reduce the array to single value.
//It return single value .
//Syntax--->> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
//array.reduce(function(prev,currentvalue))

const array =[1,2,3,4];

let result = array.reduce((res,curr) => {
     return res+curr;
});
console.log(result);
//Subtract all numbers in an array:
let numbers=[7,2,8];
let sub= numbers.reduce((total,val)=>{
    return total - val;
});

console.log(sub);


//maximum

let arr=[5,6,3,2,1,9,4];
let max=arr.reduce((prev,curr)=>{
return prev > curr ? prev : curr;

});

console.log(max);


//Sum all the numbers
let a=[1,2,3,4,5];
let sum= a.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(sum);
//multiply all the elements

let m=[2,3,4];
let product=m.reduce((prev,curr)=>{
    return prev*curr;
});

console.log(product);

let fruits=['apple','mango','orange','apple','mango','apple'];

let count = fruits.reduce((prev,fruit)=>{
    prev[fruit]=(prev[fruit]|| 0)+1;
    return prev;

},{});
console.log(count);


//practice_example_1
let marks=[45,89,90,95,97,98];

let student = marks.filter((mark)=>{
      return mark > 90;
});
console.log(student);
4

//practice_example_2

let num =prompt("Enter a number");
let myarr=[];

for(let i=1;i<=num;i++){
    myarr[i-1]=i;
}
console.log(myarr);
5
let add=myarr.reduce((prev,curr)=>{
    return prev+curr;
});
console.log(add);


let mul=myarr.reduce((prev,curr)=>{
    return prev*curr;
});
console.log(mul);