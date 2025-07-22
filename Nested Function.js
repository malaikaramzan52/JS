//Functions defined within other functions are called nested functions.
// They have access to the variables of their parent function.


function outer(a){
    function inner(b){
        return a+b;
    }
    return inner;
}
const addten = outer(10);
console.log(addten(5));

//Practice Question_1
function calculator(x,y){
    function add(){
        return x+y;
    }
    function subtract(){
        return x-y;
    }
    function multiplication(){
        return x*y;
    }
    function divide(){
        return x/y;
    }

    console.log("Add:",add());
    console.log("Subtract:",subtract());
    console.log("Multiplication:",multiplication());
    console.log("Division:",divide());

}
calculator(10,5);

//practice question_2

function validator(username){
    function isNotempty(){
        return username.trim().length>0;
    }
    function show(){
        if(isNotempty()){
            console.log("Usename is valid.");
        }
        else{
            console.log("username cannot be empty");
        }
    }
    show();
}
// validator("Ali");
validator("  ");

// practice question_3

function greetname(fullname){
    function getmessage(time){
        return `Good ${time}, ${fullname}!`;
    }
    console.log(getmessage("Morning"));
    console.log(getmessage("Afternoon"));
    console.log(getmessage("Evening"));
    


}
greetname("Amina");
