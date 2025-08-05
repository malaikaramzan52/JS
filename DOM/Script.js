let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College students";//Concatenate
console.dir(h2.innerText);
//Practice_question_2
let divs=document.querySelectorAll(".box");
let idx=0;
for(let div of divs){
    div.innerText=`Unique value ${idx}`;
    idx++;
}
console.dir(divs);

let heading = document.getElementById("header").innerText;
console.dir(heading);
//remove
let p=document.getElementById("parent").innerText;
console.dir(p);
let c=document.getElementById("child").innerText;
console.dir(c);
let remove =header.removeChild(child);
console.dir(remove);
