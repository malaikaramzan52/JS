//sort()
//lexicographic = (alphabet + numbers + symbols) as strings
let fruits=['Mango','Orange','Banana','Grapes','Kiwi','strawberry','apple'];
let fruit=fruits.sort();
let f=fruits.reverse();

//toSorted()
//The difference between toSorted() and sort() is that the first method creates a new array,
// keeping the original array unchanged, while the last method alters the original array.

let months=['jan','feb','mar','june','april','sep'];
let sort=months.toSorted();

//  toReversed()

//  The difference between toReversed() and reverse() is that the first method creates a new array,
//  keeping the original array unchanged, while the last method alters the original array.

let rev=months.toReversed();

let numbers=[1,2,4,5,7,9,0,10];
numbers.sort((a,b)=>a-b);
console.log(numbers);

let people=[
    {
    fullname :'ALi Ikram',
    age : 12,
    GPA : 2.7
},
 {
    fullname :'Ubaid',
    age : 16,
    GPA : 3.2

} ,
{
    fullname :'Asim',
    age : 42,
    GPA : 4.00

} ,
{
    fullname :'Mohsin',
    age : 21,
    GPA : 3.77

}];
// people.sort((a,b)=>a.age-b.age);
//localCompare 
people.sort((a, b) => a.fullname.localeCompare(b.fullname));

console.log(people);