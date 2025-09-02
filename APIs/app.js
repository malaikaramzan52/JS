//APIs
//Calling an API to fetch data is an asynchronous task.
//In easy words: when you ask for data from an API, your program doesn’t stop and wait for the reply — it keeps working on other things while the data is being fetched in the background.
//Fetc() method create  a  particular request known as GET Request.
const URL = "https://meowfacts.herokuapp.com/";
const factPara = document.getElementById("fact");

let promise = fetch(URL);
console.log(promise);

const getFacts = async () =>{
console.log("Getting data ....");
let response = await fetch(URL);
console.log(response);//JSON format
console.log(response.status);
let data = await response.json();
console.log(data.text);


}
// promise.then(response => {
//     console.log(response.status);
// });

//######################################## POST request ####################################
// How to send a post request using fetch API
//1.URL and the data you want to send
let url= "https://jsonplaceholder.typicode.com/posts";
const text={
    title:"My Post",
    body:"Hello from fetch POST!",
    usrId:1
};
async function sendPost(){
    try{
        //2.Make request
        const response = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(text)
        });
        //3. Check if server returned Success
        if(!response.ok){
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
        //4.Parse response body as JSON 
        const result = await response.json();
        console.log("Server replied:",result);
        return result;
    }
    catch(err){
        console.log("POST failed:",err);
        //handle error (show message to user , retry ,etc)
    }
    }
sendPost();
