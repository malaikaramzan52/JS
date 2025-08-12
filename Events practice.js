document.getElementById("btn").addEventListener("click",()=>{
    document.getElementById("text1").innerHTML = "Hello World";
});

// Example_02
let box=document.getElementById("box")
box.addEventListener("mouseover",()=>{
    box.style.backgroundColor="red";
});
box.addEventListener("mouseout",()=>{
    box.style.backgroundColor="lightgreen";
});
//Example_03
document.addEventListener("keydown",function(event){
    document.getElementById("keyDisplay").innerHTML="You pressed:" +event.key;
});
//Example_04
document.getElementById("inputField").addEventListener("input",function(){
      this.value=this.value.toUpperCase();
});
//Change the image on double click
let image=document.getElementById("imageElement");
image.addEventListener("dblclick",()=>{
    image.src="DOM/cloud.jpg";
});
//Example_05
let multiple=document.getElementById("multibtn");
 multiple.addEventListener("click",()=>{
    alert("Button Clicked");
 });
 multiple.addEventListener("mouseover",()=>{
    multiple.style.backgroundColor="lightblue";
 });
  multiple.addEventListener("mouseout",()=>{
    multiple.style.backgroundColor="aqua";
 });
//Removing eventListener

//Example_07
function handleClick() {
    alert("This will only work once!");
    document.getElementById("oneTimeBtn").removeEventListener("click", handleClick);
}

document.getElementById("oneTimeBtn").addEventListener("click", handleClick);

//Add event listener to the window object
window.addEventListener("resize",()=>{
    alert("Window resized");
});
//Passing Parameters
let para=document.getElementById("paramBtn");
let sum=0;
para.addEventListener("click",function(){
   function add(p1,p2){
    sum=p1+p2;
    alert("Sum is: " + sum);
   }
   add(5,10);
});
/////////////////////////////////////////////Event Bubbling///////////////////////////////////////////
//There are two ways of event propagation in the HTML DOM:
//Bubbling:bottom..to..up
//first inner then outer---->addEventListener(event,function,false);
//Capturing:top...to..down
//first outer then inner---->addEventListener(event,function,true);
//by default the useCapture value is false .......

//Bubbling
document.getElementById("para1").addEventListener("click",()=>{
    alert("you click white element!");
},false);
document.getElementById("myDiv1").addEventListener("click",()=>{
    alert("you click Orange element!");
},false);
//Capturing
document.getElementById("para2").addEventListener("click",()=>{
    alert("you click white element!");
},true);
document.getElementById("myDiv2").addEventListener("click",()=>{
    alert("you click orange element!");
},true);
