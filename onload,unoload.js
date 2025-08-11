//The unload  and onload events can be used to deal with cookies.
//navigator:Provides information about browser

//oninput:event occurs when an element gets user input
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

//mouseover & mouseout
function mOut(id){
    id.innerHTML = "Mouse out of me!";
}
function mOver(id){
    id.innerHTML = "Mouse over me!";
}
//obj--->properties are .innerHTML,.style,.
function mDown(id){
    id.style.backgroundColor="lightgreen";
    id.innerHTML="Release!";
}
function mUp(id){
    id.style.backgroundColor="lightblue";
    id.innerHTML="Thankyou!"
}