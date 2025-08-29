// JSON Parse
// A common use of JSON is to exchange data to/from a web server.
// When receiving data from a web server, the data is always a string.
// Parse the data with JSON.parse(), and the data becomes a JavaScript object.
let employee ={
    "name":"John",
    "age":30,
    "city":"New York",
    "birth": "1990-01-01"
};
//JSON.parse() expects a JSON string, not a plain JavaScript object.
let obj= JSON.parse('{"name":"John", "age":30, "city":"New York", "birth": "1990-01-01"}');
console.log(obj);
// Array as JSON
let arr = JSON.parse('["John", "Anna", "Peter"]');
console.log(arr);
//Reviver
// 👉 The reviver is a function that lets you transform (or filter) the values while parsing a JSON string into a JavaScript object.
let obj1 = JSON.parse('{"name":"John", "age":30, "city":"New York", "birth": "1990-01-01"}', (key,value)=>{
    if(key === "birth"){
        return new Date(value);
    }
    return value;
});
console.log(obj1.birth instanceof Date);
console.log(obj1);

//Parsing Function
let text = '{"name":"John", "age": "function(){return 30;}", "city":"New York", "birth": "1990-01-01"}';
let obj2 = JSON.parse(text);
console.log(obj2);
//Function 
// let txt = '{"name":"John",  "greet": "function(){ console.log(\\"Hello \\" + this.name); }"}';
// console.log(txt);