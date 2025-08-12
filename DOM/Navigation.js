let el=document.getElementById("demo");
console.log(el.innerHTML);//to access the text node of <title>
console.log(el.nodeName);
console.log(el.nodeType);
//element value===1;
console.log(el.firstChild.nodeName);
console.log(el.firstChild.nodeType);
console.log(el.firstChild.nodeValue);
//TextNode value === 3;

//DOM Root NOdes
//document.body----------->The body of the document
//document.documentElement--->The full document


//body
// document.getElementById("para").innerHTML=document.body.innerHTML;
//document
// document.getElementById("para").innerHTML=document.documentElement.innerHTML;



//The NODE name property
document.getElementById("id02").innerHTML=document.getElementById("id01").nodeName;
//nodeName is read-only
//nodeName of an element node is the same as the tag name

//attributeNode
let id=document.getElementById("id01");
let attr=id.getAttributeNode("class");
console.log(attr.nodeName);

console.log(attr.nodeValue);//attribute value


//textnode
console.log(id.firstChild.nodeName);

//document
console.log(document.nodeName);
console.log(document.nodeType);
console.log(document.nodeValue);//null
console.log(document.firstChild.nodeName);

//nodeValue
let p=document.getElementById("para");
console.log(p.nodeValue);//null
console.log(p.firstChild.nodeValue);//Hello
//insertBefore();

let div=document.getElementById("div1");
let newel=document.createElement("p");
newel.innerHTML="This is a new paragraph";
let child=document.getElementById("h1");
div.insertBefore(newel,child);
//removechild();
// let second=div.children[2];
// div.removeChild(second);
//replaceChild();
let newel2=document.createElement("p");
newel2.innerHTML="This is with replace";
let rep=document.getElementById("para2");
div.replaceChild(newel2,rep);

