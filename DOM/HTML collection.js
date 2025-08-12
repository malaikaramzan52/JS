let myCollection=document.getElementsByTagName("p");
console.log(myCollection[1]);

console.log(myCollection.length);


for(let i=0;i<=myCollection.length;i++){
    myCollection[i].style.color="red";
}