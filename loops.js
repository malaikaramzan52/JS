let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}
console.log("sum of 5 numbers is:", sum);
//infinite-loops:that never ends  whose condition never false

//while
let i = 1;
while (i <= 10) {

    console.log("Value of i", i);
    i++;
}
//do-while
let z = 1;
do {
    console.log("value of z", z);
    z++;
}
while (z <= 0);
//for-of loops
// is used for arrays ,strings it does not use for object
let size = 0;
let str = "javascript";
for (a of str) {
    console.log("a=", a);
    size++;
}
console.log("size of character is:", size);

//for-in loop used for object
let student = {
    fullname: "Ali",
    age: 10,
    cgpa: 2.75,
    ispass: true,
};
for (let key in student) {
    console.log(student[key]);
}

// Practice Question-1
//print all even numbers from 0 to 100

for(let e=1;e<=100;e++){
   if(e%2==0) {
    console.log("Even",e);
   }
   else {
    console.log("Odd",e)
   }
}
//Practice-Question-2
//Create a game where you start with any random number .Ask the user to keep guessing the game number until the user enter correct number.
let game_num=25;
let input_num=prompt("Enter a number");
while(input_num!= game_num){
    input_num=prompt("Enter a number again");
}
console.log("Congratulation you enter correct number",input_num);

//prompt always return string

//for each
// used for array 
// but not used it when order of array is important

let myarray = [45, 56, 7, 8, 9, 0, 2, 202, 34];

myarray.forEach(function(value) {
    console.log(value);
});


let array=['Ali','Amir','Asif','Saba','hurrain'];
array.forEach(function(value){
    console.log(value);
});

let fruits=['apple','mango','orange'];
for(let x of fruits){
    console.log(x);
}

let foods=['apple','mango','orange'];
for(let x in foods){
    console.log(x);
}
