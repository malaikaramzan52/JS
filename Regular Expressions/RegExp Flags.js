//Javascript RegExp Flags
//Flags : Flags are parameters that can modify how a regex pattern is used, such as making it case-insensitive or global.

//pattern/flags
// /g ---->global 
let text = "Is this all there is?";
let result = text.match(/is/g);
console.log(result);
// /i ---->case-insesitive
// /i --->returns only Is 
// but /gi returns is and capital both
console.log(text.match(/is/i));
console.log(text.match(/is/gi));
// /d ---> The /d flag specifies the start and the end of a match.
let str = "aaaabbbbb";
console.log(str.match(/(aa)(bb)/d));
//  /s --->The /s flag allows the . (dot) metacharacter to match newline characters (\n) in addition to any other character.
//  Allows . (dot) to match line terminators
let str1 = "Line\nLine";
console.log(str1.match(/Line./gs));

//sticky flags
// /y---->
let text1 = "abc def ghi";
const pattern = /\w+/g;
pattern.lastIndex = 4;
let result2 = text1.match(pattern);
console.log(result2);

//Unicode 
let uni =  "䷀";
let ptr1 =  /\u{04DC0}/u;
// Without the /u flag, regular expressions are not "Unicode-aware". it will return false .

console.log(ptr1.test(uni));//true

// +++++++++++++ /v++++++++++ ---> The \p escape sequence matches strings, instead of just characters.


let txt = "Hello 😄";
let ptr2 = /\p{Emoji}/v;
console.log(ptr2.test(txt));


//+++++++++++++++++++++++++++++RegExp Group Modifiers (?flag)++++++++++++++++++++++++++++++++
// The (?flag) syntax is a group modifier (inline flag modifier).
// It allows for modifying flags in a part of a pattern, rather than to the entire pattern.
// (?flags:pattern) enables the flags only for the pattern in the group.


let txt1 = "W3Schools tutorials.";
//const sample = /(?i:WSchools) tutorials/;//-->This is not supported in javascript.
const sample = /W3Schools tutorials/i;
console.log(sample.test(txt1));


//Strings Methods 
//match(regex)      returns an array of results
//matchAll(regex)	Returns an Iterator of results
//replace(regex)	Returns a new String
//replaceAll(regex)	Returns a new String
//search(regex)	    Returns the index of the first match
//split(regex)	    Returns an Array of results

//RegExp Methods
//Method	Description
//regex.exec()	Returns an Iterator of results
//regex.test()	Returns true or false