// //In the DOM, everything in an HTML document (including comments) is treated as a node.
// //  So, a comment becomes a Comment node in the DOM tree.


// let d = document.getElementById("demo");
// let child = d.childNodes;
// console.log(child);
// for (let node of child) {
//     if (node.nodeType === 8) {
//         console.log("Comment found:", node.nodeValue);
//     }
// }
// //Adding comment using javascript
// let con = document.getElementById("container");
// let com = document.createComment("This is a dynamic comment");
// //appendchild comment to container

// con.appendChild(com);
// console.log(con.childNodes);
// //Accessing all the comment nodes
// function getAllComments(node) {
//     let comments = [];
//     let TreeWalker = document.createTreeWalker(
//         node,
//         NodeFilter.SHOW_COMMENT,
//         null,
//         false
//     );
//     let currentNode = TreeWalker.nextNode();

//     while (currentNode) {
//         comments.push(currentNode.nodeValue);
//         currentNode = TreeWalker.nextNode();
//     }
//     return comments;
// }
// console.log(getAllComments(document.body));

//Practice_Example_1

let con=document.getElementById("container");
let com=document.createComment("This is dynamic comment");
con.appendChild(com);




//Practice Example_02
//Write a JavaScript function that finds the first comment inside a div with id content.
let d= document.getElementById("content");
let child= d.childNodes;
for(let node of child){
    if(node.nodeType===8){
        console.log("the first comment is found:",node.nodeValue);
        break;
    }
}
//Example_03+01
//display all comments also counts
//Write a function that counts how many comment nodes are present in the entire document.body.
function getAllComments(node){
    let count=0;
    let comment=[];
    let TreeWalker=document.createTreeWalker(
        node,
        NodeFilter.SHOW_COMMENT,
        null,
        false
    );
    let currentNode= TreeWalker.nextNode();
    while(currentNode){
        comment.push(currentNode.nodeValue);
        currentNode=TreeWalker.nextNode();
        count++;
    }
    console.log(count);
    return comment;
}
console.log(getAllComments(document));