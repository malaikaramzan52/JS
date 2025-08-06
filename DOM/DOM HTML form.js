

function runExamples() {
    const title = document.getElementById("title");
    const para = document.getElementById("para");
    const container = document.getElementById("container");

    // innerText: Only visible text
    console.log("innerText (title):", title.innerText); 
    // Output: Welcome to DOM Learning (because span is hidden)
    let change = title.innerText="Change TItle!";
    console.log(change);
    // textContent: All text (including hidden ones)
    console.log("textContent (title):", title.textContent); 
    // Output: Welcome to JavaScript DOM Learning

    // innerHTML: Gets the entire HTML content
    console.log("innerHTML (para):", para.innerHTML); 
    let parag=para.innerHTML="<i>New italic text</i>";
    console.log(parag);
    // Output: This is <b>paragraph</b> one.
     
    // tagName: Get the name of tag
    console.log("tagName of 'title':", title.tagName); 
    // Output: H1
     
    // Accessing child elements
    const firstParaInDiv = container.getElementsByTagName("p")[0];
    console.log("First paragraph in div:", firstParaInDiv.textContent); 
    // Output: Line 1
}