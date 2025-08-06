//it makes white spaces to text
//it also return text as a node ."#text"
let b= document.getElementById("box");
let last=b.lastChild;
console.log(last);

//lastElementChild

let el= document.getElementById("demo");
console.log(el.lastElementChild.innerText);

//to resolve the issues of lastChild we use lasyElementChild