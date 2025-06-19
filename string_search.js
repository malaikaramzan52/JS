
//index of 

let text = "Please locate where locate occurs!";
let index = text.indexOf("locate");
console.log(index);
//last occurance of word in string
let index1 = text.lastIndexOf("locate");
let index2 = text.lastIndexOf("John");


let text1 = "Please locate where 'locate' occurs!";
let index3 = text1.indexOf("locate", 15);

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15,
//  the search starts at position 15, and searches to the beginning of the string.

let text2 = "Please locate where 'locate' occurs!";
let index4 = text2.lastIndexOf("locate", 15);

let x="Hello world";
// let y=x.search('world');
let y=x.search(/world/);


let r="Rainy day";
let s=r.match('day');


//global search

global=text.match('loc/g');