// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         //  reject("Sorry Task is not completed");
//         resolve("Success");

//     });
// };
// let promise = getPromise();
// promise.then((res) => {
//     console.log("Promise fulfiled", res);

// });
// promise.catch((err) => {
//     console.log("rejected", err);
// });


// //Promise Chaining
// function asyncfun1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("Success");
//         }, 4000);
//     });
// }
// function asyncfun2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("Success");
//         }, 4000);
//     });
// }
// console.log("Fetching data1......");
// //Promise chaining
// //use then inside another then 
// let p1 = asyncfun1();
// p1.then((res) => {
//     console.log(res);
//     console.log("Fetching data2......");
//     let p2 = asyncfun2();
//     p2.then((res) => {
//         console.log(res);
//     });

// });
// Call back hell to promise chain
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("Success");
        }, 2000);
    });
}
console.log("Fetching data1......");
getData(1)
    .then((res) => {
        console.log("Fetching data2......");
        return getData(2);
    })
    .then((res) => {
        console.log("Fetching data3......");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });







//ApI returns promises and we get data and deal with promises;
// function getData(dataId , getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log("data",dataId);
//             // resolve("Success");
//             reject("Sorry Task is not completed");
//             if(getNextData){
//                 getNextData();
//             }
//         },5000);
//     });
// }