//Write a code to find area of rectangle.
//     Example : length = 5, width = 3
//     Output : 15

let p = 5;
let l = 3;
const recArea = p * l;

console.log(recArea);

// Write a code to find perimeter of rectangle.
//     Example : length = 5, width = 3
//     Output : 16

const recPerim = 2 * (p + l);

console.log(recPerim);

// Write a code to find diameter, circumference and area of a circle.
//     Example : radius = 5
//     Output : diameter = 10, circumference = 31.4159, area = 78.539

let r = 5;

const circleDiam = 2 * r;
const circleArea = Math.PI * (Math.pow(r, 2));
const circleCir = 2 * Math.PI * r;

console.log(circleDiam);
console.log(circleArea);
console.log(circleCir);

// Write a code to find angles of triangle if two angles are given.
//     Example : a = 80, b = 65
//     Output : 35

let a = 80;
let b = 65;
const totAngle = 180;
const angle = totAngle - (a + b);

console.log(angle);

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days). 
//     Example : 400 days → 1 year, 1 month, 5 days
//     Example: 366 days → 1 year, 0 month, 1 day


/*
//Dengan fungsi

let daysConverter = days => {
    let dayToYear = Math.floor(days / 365);
    let dayToMonth = Math.floor((days % 365) / 30);
    let dayLeft = Math.floor(days % 365 % 30);
    console.log(`${days} day(s) is(are) equal to ${dayToYear} year(s), ${dayToMonth} month(s), and ${dayLeft} day(s)`);
}

daysConverter(366);;
*/

let days = 400

let dayToYear = Math.floor(days / 365);
let dayToMonth = Math.floor((days % 365) / 30);
let dayLeft = Math.floor(days % 365 % 30);

console.log(`${days} day(s) is(are) equal to ${dayToYear} year(s), ${dayToMonth} month(s), and ${dayLeft} day(s)`);

// Write a code to get difference between dates in days.
//     Example : date1 = 2022-01-20, date2 = 2022-01-22
//     Output : 2

let date1 = new Date("2022/01/20");
let date2 = new Date("2022/01/22");
const dayDiff = Math.abs(date1.getDay() - date2.getDay())

console.log(dayDiff)