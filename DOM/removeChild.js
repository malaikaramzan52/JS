//removeChild() is a JavaScript DOM method that removes a specific child node from a parent node.
let el=document.getElementById("container");
let p1=document.getElementById("p1");


//store & Re-Add 
let removeAdd=el.removeChild(p1);
el.appendChild(removeAdd);


// el.removeChild(p1);
//By using remove() command it will remove all elements in specific div.
// el.remove(p1);

document.getElementById("remove").addEventListener("click",function(){
    el.removeChild(p1);
});

//Example
let list=document.getElementById("List");
list.addEventListener("click",function(e){
    if (e.target.tagName === "LI"){
        list.removeChild(e.target);
    }

});