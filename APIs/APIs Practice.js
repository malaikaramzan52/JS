//APIs
//Practice Examples
//Joke API

fetch('https://official-joke-api.appspot.com/random_joke')
.then(res=>res.json())
.then(data=>{
    console.log(`Joke: ${data.setup} - ${data.punchline}`);
})
.catch(err=>
    console.error(err));

//Dog Image API

fetch('https://dog.ceo/api/breeds/image/random')
.then(res=>res.json())
.then(data=>{
    document.body.innerHTML=`<img src="${data.message}"/>`;
});


//Pokemon API
fetch('https://pokeapi.co/api/v2/pokemon/1')
.then(res=>res.json())
.then(data=>{
    console.log(`Pokemon: ${data.name}, Height: ${data.height}, Weight: ${data.weight}`);
})
.catch(err=>
    console.error(err));