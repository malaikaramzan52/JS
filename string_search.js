
//index of 

let text = "Please locate where locate occurs!";
let index = text.indexOf("locate");//7
console.log(index);
//last occurance of word in string
let index1 = text.lastIndexOf("locate");//21
let index2 = text.lastIndexOf("John");//-1


let text1 = "Please locate where 'locate' occurs!";
let index3 = text1.indexOf("locate", 15);

// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15,
//  the search starts at position 15, and searches to the beginning of the string.

let text2 = "Please locate where 'locate' occurs!";
let index4 = text2.lastIndexOf("locate", 15);//7

let x="Hello world";
// let y=x.search('world');
let y=x.search(/world/);


let r="Rainy day";
let s=r.match('day');

//global search
let global = "The rain in SPAIN stays mainly in the plain";
//gi--------->Perform a global, case-insensitive search
//g---------->Perform a global
// let count=global.match(/ain/g);
let count=global.match(/ain/gi);
console.log(count);


let cats = "Cats are independent, intelligent animals known for their playful nature and soothing presence. They enjoy exploring, lounging in sunny spots, and chasing toys. Many people love cats for their soft purrs, unique personalities, and low-maintenance care. Whether adopted or rescued, cats become cherished members of families, offering warmth and affection daily.";

let iterator = cats.matchAll(/cats/gi);
  

for(it of iterator){
    console.log(`Found ${it[0]} at index ${it.index}`);
}
//match=returns only word
//matchall=return index and word

//includes method


let g="good morning";
let res=g.includes('night');
console.log(res);

let word= "Hello world, welcome to the universe.";
console.log(word);
// let output=word.includes("world",12);
// let  output=word.startsWith('Hello');
// let  output=word.startsWith('world',6);
let output=word.endsWith('universe.',37);
console.log(output);


// let message = "The cat sat on the mat.";
// let m=message.indexOf('cat');
let message = "The cat sat on the mat in the sun.";
let sentence = "The cat is sleeping peacefully.";
// let m=sentence.endsWith('fully.');
let m=message.lastIndexOf('the');
console.log(m);