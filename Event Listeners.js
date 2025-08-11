//node.addEventListener(event,callback);
//node.removeEventListener(event,callback);

let btn1=document.querySelector("#btn-1");
btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked!");
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
});
const handler3=()=>{
    console.log("button1 was clicked! - -handler3");
}

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked! - -handler2");
});
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",()=>{
    console.log("button1 was clicked! - -handler4");
});

//node.removeEventListener(event,callback);
btn1.removeEventListener("click",handler3);

//the callack reference should be same to remove.
//like two identical twins with different id cards number.