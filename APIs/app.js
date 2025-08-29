//APIs
const URL = "https://meowfacts.herokuapp.com/";


const getFacts = async () => {
    console.log("Getting Data  ....");
    let promise = await fetch(URL);
    console.log(promise.status);//200
}



