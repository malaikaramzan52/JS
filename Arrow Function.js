//Arrow Functions
//Compact way of writting a function

let myFunction =(a,b) =>{
    return a+b;
}
console.log(myFunction(5,10));
//Introduce in Modern JavaScript
 let product=(x,y)=>{
    return x*y;
 }
 console.log(product (5,5));

 hello=()=>{
    return ("Hello");
 }


 let countVowels=(str)=>{
    let count=0;
    for(let char of str){
      if(char==="a" || char==="e" || char==="i" || char==="o" || char==="u" || char==="A" || char==="E" || char==="I" || char==="O" || char==="U"){
          count++;
      }
    }
    return count;

 }