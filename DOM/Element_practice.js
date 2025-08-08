//Practice question_02
function changeColor(){
    document.getElementById("box").style.backgroundColor="blue";
}
//Practice_question_03
function chgColor(){
    let p= document.getElementById("text");
    if(p.style.color==="black"){
       p.style.color="blue";
    }
    else{
        p.style.color="black";
    }
}
//practice_question_03
function addNew(){
    let newP=document.createElement("p");
    newP.innerText="This is new paragraph";
    document.getElementById("container").appendChild(newP);
}
//practice_question_04

function toremove(){
    let el=document.getElementById("removed");
    el.remove();
}
//Practice_question_05

function Change(){
    document.getElementById("card").style.backgroundColor="#e0ffe0";
    document.getElementById("title").innerText="Updated Title";
    document.getElementById("des").innerText="This is updated description";


}
//Practice_question_06
function togglepara(){
    let par=document.getElementById("para");
    if(par.style.display==="none"){
        par.style.display="block";
    }
    else{
        par.style.display="none";
    }
}
//pracice_question_07
let count=0;
function countClicks(){
    count++;
    document.getElementById("counter").innerText="Clicked " + count + " Times";
    

}

//practice_question_08
function changeImage(){
    document.getElementById("myImage").src="cloud.jpg";
}
//practice_question_09
function changefontSize(size){
    document.getElementById("textSize").style.fontSize=size;
}

// Practicce_question_10
let itemCount=1;
function addItem(){
    let li=document.createElement("li");
    li.innerText="Item "+ itemCount;
    document.getElementById("list").appendChild(li);
    itemCount++;

}

//example

let button=document.getElementById("button");
document.querySelector("body").prepend(button);

let p=document.getElementsByClassName("content")[0];
p.classList.add("newClass");
p.classList.remove("newClass");
//setAttribute override the properties.
//so,we use the classList