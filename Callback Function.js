//A callback function is passed as an argument to another function
//  and is executed after the completion of that function.


function num(n,callback){
    return callback(n);

}
const double = (n) => n*2;
console.log(num(5,double));


//practice question_1

function greet(myname,callback){
    console.log("Hello " + myname);
    callback();
}
function saygoodbye(){
    console.log("God Bye!");
}
greet("Malaika",saygoodbye);


//practice question_2


function calculate(num1,num2,callback){
    const result=num1+num2;
    callback(result);
}
function displayresult(result){
    console.log("The result is "+ result);
}
calculate(10,5,displayresult);


//practice question_3
 function processAnswer(question,callback){
    console.log("Hello "+ question);
    callback();
 }
 function answer(){
    console.log("I am fine");
 }

 processAnswer("How are you ?",answer);


 //practice question_4
 const fruits=["apple","banana","cherry"];

fruits.forEach(function(fruit,index){
    console.log(`Fruit ${index+1}: ${fruit}`);
});

//Practice question_5
// function loadProfile(callback) {
//     console.log("Loading profile..."); // Removed invalid profile access

//     setTimeout(function () {
//         const profile = {
//             Fullname: "Ali",
//             Age: 23
//         };
//         callback(profile); // Pass the profile to the callback
//     }, 3000);//after 3 sec
// }

// // Call loadProfile and pass an anonymous callback function
// loadProfile(function (profile) {
//     console.log("Profile Loaded:", profile);
// });



//callback--- a function that is passed as an argument to another function.


// used to handle asynchronous operations:
// 1. Reading a File
// 2. Network requests
// 3. Interacting with databases

// "Hey, when you are done, call this next."


function Hello(callback){
    console.log("Hello!");
    callback();
}

function leave(){
    console.log("Leave!");
}

function wait(){
    console.log("wait!!");
}

function goodbye(){
    console.log("GoodBye!!!");
}

Hello(wait);






