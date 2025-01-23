//1. Declare and Use Variables

let studentName = "Hashim";
let studentAge = 23;
let isEnrolled = true;

console.log(studentName);
console.log(studentAge);
console.log(isEnrolled);

//2. Demonstrate Data Types
let string = "This is a string";
let yearDay = 2001.13;
let cool = false;
let animals = ['cat', 'cow', 'monkey', 'snake'];

//One way to do object
const coolHuman = new Object();
coolHuman.name = "Hashim";
coolHuman.age = 23;
coolHuman.gender = "Male";

//2nd way to do object
const cat = {
    nameCat: "Chako",
    ageCat: 4
}

//coolHuman
console.log(string);
console.log(yearDay);
console.log(cool);
console.log(animals[2]);
console.log(`This is the name of a cool person: ${coolHuman.name} , he is ${coolHuman.age} years old and is a ${coolHuman.gender}.`);

//cat
console.log(`My cute pet is named ${cat.nameCat} and he is ${cat.ageCat} years old. `);


//3. Use Basic Operators
let number1 = 5;
let number2 = 10;
let number3 = 2;
let number4 = 5;
let number5 = 3;

console.log(number1 + number2);
console.log(number2 - number3);
console.log(number5 * number4);
console.log(number2 / number3);

console.log(number2 > number1);
console.log(number5 < number3);
console.log(number2 === number5);
console.log(number1 !== number4);


let real = true;
let fake = false;

console.log(fake && fake);
console.log(real || fake);
console.log(real !== fake);
