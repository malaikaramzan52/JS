//Regex Classes
//Character Classes are characters enclosed in square brackets [].
// A character class matches any character from a set within brackets.

// [a] -->	Matches the character between the brackets
let text ="Hello World";
const pattern = /[HW]/g;
let result = text.match(pattern);
console.log(result);
// Output: [ 'H', 'W' ]

// [A-Z]---->    Matches any uppercase letter from A to Z
let text1 = " This is  W3Schools";
const ptr = /[A-Z]/g;
let res = text1.match(ptr);
console.log(res);
// Output:  ['T', 'W', 'S']

//[1234]---->    Matches any digit from 1 to 4
let text2 = "This is 4th example of 1 to 4 digit";
const ptr1 =/[1234]/g;
let res1 = text2.match(ptr1);
console.log(res1);
// Output: [ '4', '1', '4' ]