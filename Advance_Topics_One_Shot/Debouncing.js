//Debouncing
//It makes sure a function runs only after the user stops doing something.
//Helps improve performance and avoid unnecessary function calls.
function debounce(fn,delay){
     let timerId;

     return function(...args){
        clearTimeout(timerId);//cancel the previous call Time
        timerId=setTimeout(()=>{
             fn(...args);
        },delay);
     };
}


function search(query){
    console.log(`Searching for`,query);
}
const searchwithDebounce = debounce(search,1000);

searchwithDebounce('Ha');
searchwithDebounce('Har');
searchwithDebounce('Hard');
searchwithDebounce('Hard J');
searchwithDebounce('Hard JS');
searchwithDebounce('Hard JS');