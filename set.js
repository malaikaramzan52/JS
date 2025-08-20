//A JavaScript Set is a collection of unique values.
// Each value can only occur once in a Set.
// The values can be of any type, primitive values or objects.

const letters = new Set(["a", "b", "c","d","e","a","b"]);
console.log(letters);

let animals = new Set();
animals.add("dog");
animals.add("cat");
animals.add("goat");
animals.add("dog");//set contain unique elements 
console.log(animals);

//list elements of the set animals
let text = "";
for(let x of animals){
    text += x + " ";
}
console.log(text);
//typeof Set ----->Object


//Set methods
//new Set()
//add()
//clear()
//delete()
//entries()
//forEach()
//has()
//keys()
//values()

//############################Properties####################
//properties
//size
//returns number of unique elements
let s=animals.size;
console.log(s);
//has()
let answer=animals.has("dog");
console.log(answer);
//forEach()
//used function
let txt =" ";
letters.forEach(function(value){
    txt += value + " " ;
})
console.log(txt);
//values()
//The values() method returns an Iterator object with the values in a Set
const myIterator =letters.values();
//letters.values()
let result =" ";
for(let entry of myIterator){
    result += entry + " ";
}

console.log(result);
//keys()....> works same like values()

//const myIterator =letters.keys();
//letters.values()
//let result =" ";
//for(let entry of myIterator){
//    result += entry + " ";
//}


//entries()
//The entries() method is supposed to return a [key,value] pair from an object.
//A Set has no keys, so the entries() method returns [value,value].
// This makes Sets compatible with Maps.

let fruits = new Set(["apple", "banana", "orange"]);

let itr=fruits.entries();
let output = " ";
for(let entry of itr){
    output += entry + " ";
}
console.log(output);

//Set Log
//union()
const A= new Set([1,2,3,4,5]);
const B=new Set ([2,3,4,5,6]);
const C = A.union(B);
//intersaction
const D=  A.intersection(B);
//difference()
const E = A.difference(B);
//SymmetricDifference()
//Now, symmetric difference means: elements that are in either one of the sets, but not in both.
const S =A.symmetricDifference(B);
//isSubsetof()
//The isSubsetOf() method returns true if all elements in this set (A) is also elements in the argument set (B).
const subset =A.isSubsetOf(B);
//isSupersetOf()
// The isSupersetOf() method returns true if all elements in the argument set are also in this set
const superset = A.isSupersetOf(B);
//isDisjointFrom()
//The isDisjointFrom() method returns true if this set has no elements in common with the argument set.
const disjoint =A.isDisjointFrom(B);

