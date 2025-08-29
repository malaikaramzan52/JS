async function hello (){
    console.log("hello");
}
hello();
//async always return a promise.
//Await---->to wait 
//await is only used with in the async function
  

async function getWeatherData(){
    await API();//1st 
    await API();//2nd 
}

function API(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         console.log("Weather data");
        resolve(200);
       },2000);
    });
}

function getData(dataId){
    return new  Promise ((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data", dataId);
            resolve(200);
        },2000);
    });
}
async function getAllData(){
    console.log("Data1.....");
    await getData(1);
    console.log("Data2.....");
    await getData(2);
    console.log("Data3.....");
    await getData(3);
    console.log("Data4.....");
    await getData(4);
    console.log("Data5.....");
    await getData(5);
    console.log("All Data is fetched");

};

//IIFEs
//is excuted only once and does need to call the function.
// (async function getAllData(){
//     console.log("Data1.....");
//     await getData(1);
//     console.log("Data2.....");
//     await getData(2);
//     console.log("Data3.....");
//     await getData(3);
//     console.log("Data4.....");
//     await getData(4);
//     console.log("Data5.....");
//     await getData(5);
//     console.log("All Data is fetched");

// })();

//IIFE;
//Avoiding polluting the global namespace by creating a new scope.
(function (){
    let secret ="hidden";
    console.log("Iside IIFE :", secret);
})();
//console.log("Outside IIFE :", secret);//error
//Computing values with complex logic, such as using multiple statements as a single expression
let discount = (function (){
    let price =100;
    let tax =0.1 * price;
    let finalPrice = price + tax - 20;
    return finalPrice;
})();
console.log("Discounted price :", discount);