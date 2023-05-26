// import moment from "moment";
let moment = require("moment");

let first = moment().format("MMMM Do YYYY, h:mm:ss p"); // February 12th 2021, 12:54:12 pm
console.log(first);

let second = moment().format("dddd"); // Friday
console.log(second);
let third = moment().format("MMM Do YY"); //Feb 12th 21
console.log(third);
let date = moment("2020-01-01");
console.log(date.isValid());
let validDate = moment("2020-01-01");
console.log(validDate.isValid());
let addDate = moment().add(7, "days").calendar();
console.log(addDate);
let addMonth = moment().add(7, "months").calendar();
console.log(addMonth);
let addYear = moment().add(7, "years").calendar();
console.log(addYear);
let subtractDate = moment().subtract(7, "days").calendar();
console.log(subtractDate);
let subtractMonth = moment().subtract(7, "months").calendar();
console.log(subtractMonth);
let subtractYear = moment().subtract(7, "years").calendar();
console.log(subtractYear);
var a = moment([2015, 9, 11]);
var b = moment([2014, 11, 11]);

console.log(a.diff(b, "days"));
var date2 = moment([2015, 09, 16]);
var date1 = moment([2014, 11, 27]);

console.log(date1.diff(date2, "days"));
