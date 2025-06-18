let sum=0;

for(let i=1;i<=5;i++){
   sum=sum+i;
}
console.log("sum of 5 numbers is:",sum);
//infinite-loops:that never ends  whose condition never false

//while
let i=1;
while(i<=10){
    
    console.log("Value of i",i);
    i++;
}
//do-while
let z=1;
do{
console.log("value of z",z);
z++;
}
while(z<=0);
//for-of loops
// is used for arrays ,strings it does not use for object
let size=0;
let str="javascript";
for (a of str){
    console.log("a=",a);
    size++;
}
console.log("size of character is:",size);

//for-in loop used for object


