//ISO Date	"2015-03-25" (The International Standard)
//Short Date	"03/25/2015"
//Long Date	"Mar 25 2015" or "25 Mar 2015"

const d=new Date("2025-08-04");
console.log(d);

const m= new Date("2025-08");
console.log(m);

let msec=Date.parse("March 21,2012");
console.log(msec);
const date= new Date(msec);
console.log(date);

//Get fullyear
const year = new Date("2021-03-25");
console.log(year.getFullYear());

const dt = new Date();
console.log(dt.getFullYear());
console.log(dt.getMonth());

//get number of a month
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const n= new Date("2025-08-04");
const n= new Date();
let month= months[n.getMonth()];
console.log(month);

//Now Date
let ms = Date.now();
console.log(ms);

//Calculate the number of years since 1970/01/01:
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const yr = day * 365;

let years = Math.round(Date.now() / yr);
console.log(years);
//The getTimezoneOffset() method returns the difference (in minutes) between local time an UTC time
let now = Date.now();
let diff = d.getTimezoneOffset();
console.log(diff);