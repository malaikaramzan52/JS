//--->\d = matches Digits

let text = "Give 100%!";
const ptr = /\d/g;
console.log(text.match(ptr)); // ['1', '0', '0']

//\D = matches Non-Digits
const ptr2 = /\D/g;
console.log(text.match(ptr2)); // ['G', 'i', 'v', 'e', ' ', '%', '!']

//\w = matches Word Characters (alphanumeric & underscore)
const ptr3 = /\w/g;
console.log(text.match(ptr3)); // ['G', 'i', 'v', 'e', '1', '0', '0']

//\W = matches Non-Word Characters
const ptr4 =/\W/g;
console.log(text.match(ptr4)); // [' ', '%', '!']

//\s = matches Whitespace Characters
const ptr5 = /\s/g;
console.log(text.match(ptr5)); // [' ']

//\xhh = matches the character with the hexadecimal value hh
let text1 = "Visit W3Schools . Hello World!";
let pattern = /\x64/g;    // hx to decimal then ASCII
console.log(text1.match(pattern)); // ['d']


//\uhh = matches the Unicode character with the hexadecimal value hh
let pattern2 = /\u0064/g;    // hx to decimal then Unicode
console.log(text1.match(pattern2)); // ['d']
