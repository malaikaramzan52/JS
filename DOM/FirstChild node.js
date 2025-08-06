// firstElementChild is a DOM property in JavaScript that returns the first child element (not text, comment, or whitespace) of a given element.
// It ignores whitespace, comments, and text nodes.
// It only returns an element node (like <div>, <p>, <ul>, etc.)

//Syntax
//element.firstElementChild

let cont = document.getElementById("container");
let firstChild =cont.firstElementChild;
console.log(firstChild);

let b= document.getElementById("box");
let firstel= b.firstElementChild;
console.log(firstel);

//comparrison with firstChild
let el = document.getElementById("demo");
console.log(el.firstChild);
console.log(el.firstElementChild.innerText);

//firstElementChild
let p01=document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
//whitespace retuens to "#text"
//To avoid the issue with node.
// firstChild returning #text or #comment nodes, Element.firstElementChild can be used to return only the first element node.

let li=document.getElementById("list");
console.log(li.firstElementChild.innerText);