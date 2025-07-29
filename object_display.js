

// Displaying the Object Properties by name
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;


// Displaying the Object Properties in a Loop
let text = " ";
for (let x in person) {
  text += person[x] + " ";
}

document.getElementById("demo").innerHTML = text;

// Displaying the Object using Object.values()
const Car = {
  carname: "Mehran",
  color: "white",
  model: "500"
};

const Array = Object.values(Car);
document.getElementById("my").innerHTML = Array;
//Using Object.entries
let txt = " "; // initialize a string
let fruits = {
  apple: 3,
  banana: 2,
  orange: 5
};

for (let [fruit, value] of Object.entries(fruits)) {
  txt += fruit + " : " + value + "<br>";
}

document.getElementById("yours").innerHTML = txt;
// Displaying the Object using JSON.stringify()

const items={
  pen:"blue",
  book:"red",
  copy:"yellow"
};

let myString=JSON.stringify(items);
document.getElementById("str").innerHTML=myString;
