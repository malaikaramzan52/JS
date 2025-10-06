//Arguments Objects
//If we did not passed any parameters,the arguments object still stores all value passed.
function showArgs(){
    console.log(arguments);
}
showArgs("harry",21,true);
//output-->[Arguments] { '0': 'Malaika', '1': 21, '2': true }


//Accessing Arguments by index

function add(){
    console.log(arguments[0]+arguments[1]);
}
add(5,10);

//Checking the number of arguments


function countArgs(){
    console.log("Number of arguments:",arguments.length);
}

countArgs(10,20,30);


function showall(...args){
    console.log(args);
}
showall("A","B","C");