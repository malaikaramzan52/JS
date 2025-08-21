//Regular Expressions are used for:
//Text Searching
//Text Replacing
//Text Validation 

//Syntax---->/pattern/modifier flags;

// Text Searching
let Text = "Visit!!! W3Schools";
let n = Text.search(/w3schools/i);
console.log(n); // Output: 6
//V  i  s  i  t  !  !  !     W  3  S  c  h  o  o  l  s
// 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17
// it also count spaces and special characters


// ---> /i is a modifier (modifies the search to be case-insensitive)
//Using String methods 

//match()--->return an array of the results
let text = "Visit W3school";
let z = text.match(/W3school/);
console.log(z);
//replace()--->return the new String 
let y = text.replace(/W3school/, "W3Schools");
console.log(y);
//search()--->return the index of the first match 
let m = text.search(/W3school/);
console.log(m);
//Regular Expression alteration:
let colors = "green,Black,white,red,blue";
let output = colors.match(/red|green|blue/g);
console.log(output);
//for alteration is used |
//--->/g is global flag
//The /g flag matches all occurrences of the pattern, rather than just the first one.

let text2 = "Is this all there is?";
console.log(text2.match(/is/g));
//Metacharacters ---> Metacharacters are characters with a special meaning.
// They can be used to match digits, words, spaces, and more.
//---> \d digit
let digit = "Give 100%!";
console.log(digit.match(/\d/g));
//---> \w word
let word = "Hello __World0099!";
//A word character is a character a-z, A-Z, 0-9, including _ (underscore).
console.log(word.match(/\w/g));
//--->\s spaces
let space = "Hello World!";
console.log(space.match(/\s/g));

// +++++++++++++++++++++++++++++++++++++++ JavaScript Regex Flags +++++++++++++++++++++++++
//  /g           global search
//  /i           case-insensitive search
//  /u           unicode search


// +++++++++++++++++++++++++++++++++++++++ Javascript RegEx Quantifiers +++++++++++++++++++
//Quantifiers define the numbers of characters or expressions to match.
//x* ---> Matches the preceding expression zero or more times.
//group of the consecutive characters
let str = "Hellooooo";
console.log(str.match(/o*/g));

//x?---->Matches zero or one occurrence of x
let str2 = "color colour colorrr";
console.log(str2.match(/colou?r/g));
//0? ---> optional
let t = "1 , 100 or 1000?";
console.log(t.match(/10?/g));
//x{n}---->Matches exactly n occurrences of x
let str3 = "Hellooooooooooooo";
console.log(str3.match(/o{6}/g));
//X+ --->atleast one
let string ="I am a girl";
console.log(string.match(/m+/g));


