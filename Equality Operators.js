//Equality Operatores
//Loosely Equal(==)
//The loose equality operator (==) compares two values for equality after converting them to the same type.

console.log(5 == "5");      // ✅ true  (string "5" is converted to number 5)
console.log(0 == false);    // ✅ true  (false becomes 0)
console.log(null == undefined); // ✅ true (special rule)
console.log(" " == 0);      // ✅ true  (empty string becomes 0)

//Strictly Equal
// The strict equality operator (===) compares both the value and the type.

console.log(5 === "5");     // ❌ false (different types: number vs string)
console.log(5 === 5);       // ✅ true  (same type and value)
console.log(false === 0);   // ❌ false (boolean vs number)
console.log(null === undefined); // ❌ false



