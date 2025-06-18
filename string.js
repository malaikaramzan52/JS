//String is a sequence of characters that represents text
//create string
let str='ALi';
let str_1='Amir'; 
// inbuilt properties
//length
// str.length(str);
//str indicies
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

//Template literals
//special type of string

let sentence=`This is template string`;
console.log(sentence);

let object={
    item : 'pen',
    cost:10,
};
let output =`the item is ${object.item} and cost is ${object.cost}`;
console.log(output);



//the format to write ${expression} is known as string interpolation

let expression=`The use of expression in template literals  ${1+2+3+4+5}`;
console.log(expression);




//Escape Characters
//new line
console.log("Apna\ncollege");//length =12 because escape characters count to be 1
console.log("Apna\tcollege");
let string="Apna\ncollege";
console.log(string.length)


//strings method in js

//method is a block of code that perform function 
//method and block are same 
//These are built-in function to manipulate a string

//strings are immutable (not change actual string value)
let a="APna college";
console.log(a);
//uppercae
console.log(a.toUpperCase(a));
//lowercase
console.log(a.toLowerCase(a));

//trim--->remove space alst and end of text
let b="    Apna College        ";
console.log(b);
console.log(b.trim());

//slice method 
//return part of string
//ending value is non-exclusive


let d="1023456";
console.log(d.slice(1,3));

let f="Malaika";
console.log(f.slice(2,5));
let part=f.substring(2,5);


console.log(f.slice(1));

//concat method
//connect str1+str2

let g="Malaika";
let h="Ramzan";
console.log(g.concat(h));
console.log(g+h);


//replace method


let i="hello";
console.log(i.replace("lo","p"));

let j="helololololololo";
console.log(j.replaceAll("lo","p"));



let k="I love JS";
k=k.replace("I","S");
console.log(k.charAt(0));
console.log(k.charAt(1));
console.log(k.charAt(2));
console.log(k.charAt(3));
console.log(k.charAt(4));
console.log(k.charAt(5));
console.log(k.charAt(6));
console.log(k.charAt(7));


//Practice Question-1
let fullname=prompt ("Enter fullname");
console.log(fullname);
let username=fullname.toLowerCase(fullname);
console.log(username);
console.log('@'+ username +username.length);



//padStart()
//works with string to padd number it converts first into string 
let text="5";
// let padded=text.padStart(4,"0");
//pad ends
let padded=text.padEnd(4,"x");
// let padded=text.padStart(4,"x");
console.log(padded);

//repeat()

let rep="Hello world";
rep=rep.repeat(2);
console.log(rep);

//conerting string to array

let y="Hello world";
// let z=y.split(",");
// let z=y.split(",");
let z=y.split("|");
console.log(z);
