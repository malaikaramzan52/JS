let arr=["delhi","india","multan","pakistan"];
arr.forEach((val)=>{
    console.log(val.toUpperCase());
});

//forEach is an higher order function or method that executes each element of an array.
//its an array built-in method.
//forEach is the method that performs looping.
//A callback function is what you give to forEach to run during the loop.


let number=[2,3,4,5,6,7,8];
number.forEach((num)=>{
    console.log(num*num);
})

//Practice_question_1
//Calculate the sum of all elements

let n=[10,15,20];
let sum=0;
n.forEach(function(s){
    sum=sum+s;
})
console.log("Sum: "+ sum);


//practice question_2
//Print names with custom message

let names=["Mohsin","Saim","Waleed"];
names.forEach(function(n){
    console.log("Name "+ n +"!");
})

//practice question_3
//Access element, index, and full array

let fruits=["Apple","Mango","Orange"];
fruits.forEach(function(fruit,index,fruits){
    console.log(fruit + " : " + index +" : " + fruits );
})


//practice question_4
//Modify object array values

const Students=[
    {fullname:"Zain",marks:34},
     {fullname:"waleed",marks:40},
      {fullname:"Akram",marks:35}

];

Students.forEach(function(student){
    student.marks += 5;
});
console.log(Students);