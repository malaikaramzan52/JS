//JSON Object Literals
let obj='{"name":"John","age":30,"city":"New York"}';
//Inside the JSON string there is a JSON object literal

// It is a common mistake to call a JSON object literal "a JSON object".
// JSON cannot be an object. JSON is a string format.
// The data is only JSON when it is in a string format. 
// When it is converted to a JavaScript variable, it becomes a JavaScript object.

let myJSON = '{"name":"John", "age":30, "Car":null}'; // JSON object literal as a string
let myObj= JSON.parse(myJSON);

let text = " ";
for(let x in myObj){
    text += myObj[x] + ","; //to access key --> to access the property value --> myObj[x]
}