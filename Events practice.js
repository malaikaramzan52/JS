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
    console.log("Window resized");
})