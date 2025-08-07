//getAttribute----> getAttribute(attr)
//setAttribute(attr,value)----> to set the attribute val


//get Attribute 
let div=document.querySelector("div");
console.log(div);

let id=div.getAttribute("id");
console.log(id);
let name=div.getAttribute("name");
console.log(name);

let para=document.querySelector("p");
console.log(para.getAttribute("class"));

//Set Attribute
let h1=document.querySelector("h2");
console.log(h1.setAttribute("class","newClass"));
//Style
//it shows inline CSS
let d=document.querySelector('div');
console.log(d);
d.style.backgroundColor="purple";
// d.style.visibility="hidden";
d.style.fontSize="32px";
div.innerText="Hello!";