//Text properties are used to access or change the text content of HTML elements using JavaScript.
//innerText ignores hidden text
let elm=document.getElementById("text");
console.log(elm.innerText);
//text Content
//Because console.log() is used to print messages to the developer console, not to the actual webpage.
let el=document.getElementById("text2");
console.log(el.textContent);

//Setting text using innerText and textContent
let p=document.getElementById("demo");
// console.log(p.innerText="The text is change by innerText");
//or
console.log(p.textContent="This text is changed by textContent");

// ✅ innerText respects visual formatting.
// ❌ textContent is just raw text — no line breaks.