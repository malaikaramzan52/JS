//Values
//An Element object, or null.
//syntax
//nextELementSibling

//next
let el=document.getElementById("div-01").nextElementSibling;
console.log("Siblings of div-01");
while(el){
    console.log(el.nodeName);
    el=el.nextElementSibling;
}

//previous
let p=document.getElementById("div-02").previousElementSibling;
console.log("previous Siblings are:");
while(p){
    console.log(p.nodeName);
    p=p.previousElementSibling;
}