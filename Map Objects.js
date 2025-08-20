//Map Objects
//A map object hold the key-value pairs where the keys can be any datatypes.
//A map also remembers the original insertion order of the keys.

const fruits = new Map(
    [["apples", 500],
    ["oranges", 300],
    ["bananas", 200]]);

    console.log(fruits);

    // You can add elements to a Map with the set() method
   fruits.set("grapes", 400);
   //to change existing map values:
   fruits.set("apples", 600);
   console.log(fruits);
   //get()
   console.log(fruits.get("oranges")); // 300
   //maps are objects 
  console.log( typeof fruits);
  //instanceof Map returns true:
  let instance=fruits instanceof Map;
  console.log(instance); // true
  //size 
  console.log(fruits.size);
  //delete
  fruits.delete("bananas");
  console.log(fruits);
  //clear()
  //The clear() method removes all the elements from a map:
  //fruits.clear();

//   Map.has()
console.log(fruits.has("apples"));
console.log(fruits.has("bananas"));

//forEach()
let letters =new Map ([["a", 1], ["b", 2], ["c", 3]]);
let text = " ";
letters.forEach(function(value,key){
    text+= key+' = '+ value;
})
console.log(text);

//Map.entries()
let txt = " ";
for(const x of letters.entries()){
    txt += x;
}
console.log(txt);

//Map.keys()
let keys =" ";
for(let k of letters.keys()){
    keys += k + " ";
}
console.log(keys);

//Map.values()
let value=" ";
for(let v of letters.values()){
    value += v + " ";
}
console.log(value);

//Objects as Keys
const Car1={
    name:"Mehran",
};
const Car2={
    name:"Haval"
};
const Car3={
    name:"Alto"
};
const Car =new Map();
Car.set(Car1,{price:1234,name:Car1.name});
Car.set(Car2,{price:4567});
Car.set(Car3,{price:892121});

console.log(Car.get(Car1));


///Map.groupBy()
//The Map.groupBy() method groups elements of an object according to string values returned from a callback function.
const fruit =[
    {name:"apple",quantity:300},
    {name:"banana",quantity:500},
    {name:"orange",quantity:200},
    {name:"grape",quantity:100}
];

function myCallback ({quantity}){
    return quantity > 200 ? "OK" : "Low"; 
}
const result=Map.groupBy(fruit,myCallback);
// const result=Object.groupBy(fruit,myCallback);
console.log(result);
//{quantity} is destructured in the callback function from an array of objects.


//Object.groupBy() groups an elements in objects.
//Map.groupBy() groups an elements in Maps.


// problem_1

const Student = new Map();
Student.set("Ali",98);
Student.set("Maaz",87);
Student.set("Waleed",90);

console.log(Student.get("Maaz"));

//problem_2
const countries = new Map([
    ["Pakistan","Islamabad"],
    ["India","New Delhi"],
    ["Bangladesh","Dhaka"]
]);
let c="";
for(let [country,capital] of countries.entries()){
    c += `${country}: ${capital}\n`;
}
console.log(c);
// problem_03
const  product1={
    name:"Laptop"
}
const  product2={
    name:"Phone"
}
const  product3={
    name:"Tablet"
}

const prices=new Map();
prices.set(product1,10000);
prices.set(product2,8000);
prices.set(product3,6000);

console.log(product1.name + " : "+prices.get(product1));

for(let [product,price] of prices){
    console.log(`${product.name} : ${price}`);
}