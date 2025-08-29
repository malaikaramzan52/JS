//JSON Server
//A common use of JSON is to exchange data to/from a web server.
//When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.

//Sending Data
//When sending data to a web server, the data has to be a string.
let myObj={
    name:"John",
    age:31,
    city:"New York"
};
let myJSON = JSON.stringify(myObj);
window.location = "http://localhost:3000/endpoint?x="  + encodeURIComponent(myJSON); //Send data to server