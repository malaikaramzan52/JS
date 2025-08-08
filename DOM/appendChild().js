//appendChild() is a JavaScript DOM method used to add a node (like a new element or text) to the end of the list of child nodes of a specified parent node.
//Syntax
//parentnode.appenChild(childnode)


let div = document.getElementById("container");
let add = document.createElement("add");
add.innerHTML = "<h1>I am new!</h1>";
div.appendChild(add);


let para = document.getElementById("myPara");
let box2 = document.getElementById("box2");

box2.appendChild(para);

let list = document.getElementById("list");
let li = document.createElement("li");
li.innerText = "Mango";
list.appendChild(li);


let li1 = document.createElement("li");
li1.innerText = "Orange";
list.appendChild(li1);

//practice_example
let count = 1;
let myList = document.getElementById("myList");
let btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    let list1 = document.createElement("li");
    list1.innerText = "Item" + count;
    myList.appendChild(list1);
    count++;
});


// Practice_example
let p = document.getElementById("para");
let b = document.getElementById("box3");

document.getElementById("button").addEventListener("click", function () {
    b.appendChild(p); // Moves the paragraph from box1 to box2
});