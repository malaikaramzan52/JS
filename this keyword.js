// console.log("ALlah");

// Methods like call(), apply(), and bind() can refer this to any object.

// In an object method, this refers to the object.
let newperson={
    firstname:"Malaika",
    lastname:"Ramzan",
    fullname:function(){
        return this.firstname +" "+ this.lastname;
    }
};
console.log(newperson.fullname());

// Alone, this refers to the global object.

let x=this;
console.log(this);

// In a function, this refers to the global object.
function MyFunc(){
    return this;
}
let y=MyFunc();
console.log(y);
// In a function, in strict mode, this is undefined.
// In HTML file.
// In an event, this refers to the element that received the event.
//this refers to HTML elements that recieve the event.
/* <button onClick="this.style.display='none'">
        Click to Remove me
    </button> */
//return [object Object]
    let me={
        myname:"malaika ramzan",
        Myfunction: function(){return this;}

    };
    console.log(me.Myfunction());