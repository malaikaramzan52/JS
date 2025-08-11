//Event 
//The change in the state of an object is known as Event.
//Events are fired to notify code of "interesting changes" that may affect code execution.

//Event handling in JS 
let btn1=document.querySelector("#btn-1");

btn1.onclick=()=>{
    console.log("Button is clicked");
    let a=25;
    a++;
    console.log(a);
}
let div=document.querySelector("#div");
div.onmouseover=(evt)=>{
    console.log("Mouse is over the div");
    console.log(evt);
     console.log(evt.target); //target is the element that triggered the event.
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);
}
//syntax
//node.event=()=>{}

//If we handle inline event  and JS event handle .The priority is given to JS event handling.
//If we handle one event twice a time the secondone override the first one.
//Event Object
//It is a special object that has details about the event that occurred.
//It contains properties like target, type, and currentTarget.
//All event handlers have access to the Event Objects properties and methods .

let btn2=document.querySelector("#btn-2");
btn2.onclick=(evt)=>{
    console.log(evt);
    console.log(evt.target); //target is the element that triggered the event.
    console.log(evt.type);
    console.log(evt.clientX,evt.clientY);
}

//clientX=position of button horizontally.
//clientY=position of button vertically.
