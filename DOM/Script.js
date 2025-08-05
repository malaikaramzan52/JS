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