// let d= document.getElementById("container");
// d.innerText="I am new";
// document.getElementById("container").appendChild(d);


let el=document.getElementById("RemoveMe");
el.remove();


//append child
//practice_question_01
let d=document.getElementById("container");
d.innerText="I am new";
// document.getElementById("container").appendChild(d);
//Example_02
//Change the background color of an element when a button is clicked.
function changeColor(){
    let b =document.getElementById("colorBox");
    b.style.backgroundColor="blue";
    b.style.text="white";
    b.style.padding="20px";
}
//insert Element
let newBtn =document.createElement("button");
newBtn.innerText="Button";
newBtn.style.margin="20px";
console.log(newBtn);

//node.append(el) adds at the end of node(inside)
let app=document.getElementById("box");
app.append(newBtn);

//node.prepend(el) adds at the start of (inside)
let pre=document.getElementById("pre");
pre.prepend(newBtn);
//node.before(el)  adds before the node (outside)
let before=document.getElementById("before");
before.before(newBtn);
//node.after(el)   adds after the node (outside)
let after=document.getElementById("after");
after.after(newBtn);
//heading
let newheading=document.createElement("h1");
newheading.innerHTML="<i> Hi, I am new! </i>";
document.querySelector("body").prepend(newheading);

//remove node
let r=document.getElementById("remove");
r.remove();