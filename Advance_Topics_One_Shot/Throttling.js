//Throttling
// Throttling ensures a function is executed at most once in a specified time interval.
// Comparison with Debouncing:
// -> Debouncing waits for a pause before executing
// -> Throttling executes at regular intervals


function throttle(f,delay){
    let lastCall=0;
    return function(...args){
        const now = Date.now();
        if(now-lastCall < delay){
            return;
        }
        lastCall=now;
        return f(...args);
    };
}
function sendChatMessage(message){
    console.log(`Sending Message:`,message);

}

let sendchatMessageWithDelay = throttle(sendChatMessage,2000);
sendchatMessageWithDelay('Hi');