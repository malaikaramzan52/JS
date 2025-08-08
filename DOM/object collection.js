//a group of elements that behave like an array, but are not exactly arrays.
//document.form
//document.images
//document.links
//document.anchors
//document.getElementByTagName("tag")
//document.getElementByClassName("classname");

function showData() {
    const x = document.forms['frm1']; // Get the form
    let text = "";

    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>"; // Add each value
    }

    document.getElementById("demo").innerHTML = text; // Show values
}
//Image
let allImages=document.images;
console.log("Total images:", allImages.length);
console.log("First image alt text:", allImages[0].alt);

//form
let allForm =document.forms;
console.log("Total Forms :", allForm.length);
console.log("First form id :",allForm[1].id);

//time
document.getElementById("time").innerHTML="Date :"+ Date();
//document.write()
document.write(Date());
// Never use document.write() after the document is loaded. It will overwrite the document.
// // setTimeout(function(){
//     document.write("This is new");
// },2000);