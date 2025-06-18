let age=25;
let result;
result= age>28?"adult":"not adult";
console.log(result);
// task-1
//to find number is multiple of 5 or not 
//alert(hello) one time pop up

let number=prompt("Enter a number");

if(number%5==0){
    console.log("this is multiple of 5");
}
else{
    console.log("this is not the multiple of 5")
}

// task-2
let num=prompt("Enter your numbers");
let grade;
if(num>=90&&num<=100){
    console.log("A");
}
else if(num>=70&&num<=89){
    console.log("B");
}
else if(num>=60&&num<=69){
    console.log("C");
}
else if(num>=50&&num<=59){
    console.log("D");
}
else{
    console.log("F");
}