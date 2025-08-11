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

// Practice Example
//Create a toggle button that changes the screen to dark-mode when clicked & ligh-mode when clicked again.
//Toggle button--->Switch between two buttons
//1----->2
//2----->1

let modebtn=document.querySelector("#mode");
let currMode="lightmode";//darkmode

modebtn.addEventListener("click",()=>{
    if(currMode === "lightmode"){
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
        document.querySelector("body").style.color="white";
    }else{
        currMode="lightmode";
        document.querySelector("body").style.backgroundColor="white";
        document.querySelector("body").style.color="black";
    }

  console.log("Current Mode is: ",currMode);
});

//content
let content=document.querySelector("#content");

content.addEventListener("click",()=>{
    content.innerHTML="You clicked the content!";
});


function change(id){
    id.innerHTML="OOps!";
}
//id=="this"

function displayDate(){
    document.getElementById("time").innerHTML=Date();
}