// let d= document.getElementById("container");
// d.innerText="I am new";
// document.getElementById("container").appendChild(d);


let el=document.getElementById("RemoveMe");
el.remove();


//append child
//practice_question_01
let d=document.getElementById("container");
d.innerText="I am new";
document.getElementById("container").appendChild(d);
//Example_02
//Change the background color of an element when a button is clicked.
function changeColor(){
    let b =document.getElementById("colorBox");
    b.style.backgroundColor="blue";
    b.style.text="white";
    b.style.padding="20px";
}


