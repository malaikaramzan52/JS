const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
// document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city;

let text=" ";
for(let x in person){
    text +=person[x]+ " ";
}

document.getElementById("demo").innerHTML=text;