//Array methods
//Two typesof array methods
//Some change an array or some not 



//push()---->push at end of array
//change existing array

let foodItems = ["potato","apple","Litchi","tomato"];
console.log(foodItems);

// foodItems.push('chips','burger','paneer');
let deletedItem = foodItems.pop();
console.log(foodItems);
console.log("deletedItem is",deletedItem);
//pop also change original array 


//to Sring()


//to convert an array in string 


let marks=[97,35,45,89];
console.log(marks);

let items=['pen','book','register','ink'];
console.log(items);

//concat--> joins multiple arrays & return result
//it return new array

let marvel_heroes = ["thor","spiderman","ironman",'antman'];
let dcHeroes = ["superman","batman"];
let pakistan_heros=['Alma Iqbal','Quaid-e-azam'];

let heroes=marvel_heroes.concat(dcHeroes,pakistan_heros);
console.log(heroes);

//unshift()---> add to start
marvel_heroes.unshift('antman');

//shift()---->delete from start & return
//it changes original value 


let deleted=marvel_heroes.shift();
console.log(deleted);


// slice
//return a piece of the array
//slice(startIdx,endIdx)
//last index is exclusive 
console.log(marvel_heroes.slice(1,3));


//splice --> change original array (add,remove,replace)
//index-2
//delete elements-2
//replace -2
//101,102
let number=[1,2,3,4,5,6,7];
number.splice(2,2,101,102);
//Add ELement
number.splice(2,0,105);
//Delete Element

number.splice(3,1);

// Replace Element
number.splice(4,1,104);
let val =number.slice(4);
console.log(val);



//Array at() method
let fruits=["apple","mango","banana","grapes","orange","kiwi"];
let fruit=fruits.at(2);
// let fruit=fruits[3];
console.log(fruit);

//[-1] index does not support in Java script for array and object


//join method
//The join() method also joins all array elements into a string.
//It behaves just like toString(), but in addition you can specify the separator


let output=fruits.join("*");
console.log(output);


// copyWith() method
//The copyWithin() method copies array elements to another position in an array

let shoes=["joggers","sandles","nike","adidas","bata","stylo"];
console.log(shoes);
let result=shoes.copyWithin(2,0,2);
console.log(result);



//Flattering

// Flattening an array is the process of reducing the dimensionality of an array.
// Flattening is useful when you want to convert a multi-dimensional array into a one-dimensional array.

//flat
let myarr=[[1,2],[3,4],[5,6]];
let newarr=myarr.flat();

//mapflat()
//map---->transform each element
//flat--->flatten by 1 level ---> makes it one flat array


let x=[1,2,3,4,5];
let y=x.flatMap(x=>[x,x*10]);

//toSplice()
//toSpliced(startindex,deletecount)
// The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

let z=["book","pencil","pen"];
let a=z.toSpliced(0,1);








//Practice Questions
// let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// companies.shift();
// companies.splice(1,1,'Ola');
// companies.push('Amazon');


