//JSON to Javascript objects
//JS intro 
// JS Syntax
//JS DataTypes

let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
const text1 = JSON.parse(text);
console.log(text1);
//function to convert string to JSON-->parseJSON
function parseJSON(text) {
    return JSON.parse(text);
}
let func = parseJSON(text);
console.log(func);

person = {
    firstName: "John",
    lastName: "Doe",
    age:31,
    city:"New York"
};
console.log(person.firstName);
person.lastName = "Smith";
console.log(person.lastName);
//JSON Strings
my={
"name":"John",
"age":30
}
console.log(my.name);
console.log(my.age);
//JSON numbers 
//Numbers in JSON must be an integer or a floating point.

//JSON Object 
//Value in JSON can be objects

MySelf={
    "employee":{
        "name":"John",
        "age":30,
        "City":"New York",
        "middlename":null
    }
};
//JSON Array
Your ={
    "Yours":["John","Anna","Peter"]
};
// JSON null
// Value in JSON can be null



