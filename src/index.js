import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = '<h1>JavaScript Basics</h1>';

// ----------

// console.log(1 == "1");
// console.log(1 === "1");


// // Truthy Values
// console.log(!!true);
// console.log(Boolean(true));
// console.log(!!{});
// console.log(!![]);
// console.log(!!new Date());
// console.log(!!'0');
// console.log(!!3.14);
// console.log(!!-42);

// // Falsy Values
// console.log(!!false);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!0);
// console.log(!!NaN);
// console.log(!!'');

// const condition = true;

// if (condition) {
//   console.log('Yes');
//   } else {
//     console.log('No');
//   }

// const number = 1000
// let result; //undefined

// if (number === 1) {
//   result = 'One';
// } else if (number === 99) {
//   result = 'Ninety-Nine';
// } else if (number === 1000) {
//   result = 'One Thousand';  
// } else {
//   result = 'No Match';
//   }


// console.log(result);


//  Ternary Operator
// const number = 99
// let result;

// if (number === 1) {
//   result = 'One';
// } else {
//   result = 'No Match';
// }

// console.log(result);

// const number = 1;
// // let result = condition ? true : false;
// const result = 'The Number is: ' + (number === 1 ? 'One' : 'No Match');

// console.log(result);

// const anotherNumber = 1000;
// const anotherResult =
//   anotherNumber === 1
//   ? 'One'
//   : anotherNumber === 99
//     ? 'Ninety-Nine'
//     : anotherNumber === 1000
//       ? 'One Thousand'
//       : 'No Match';

//   console.log(anotherResult);

// const anotherNumber = 99;
// let anotherResult;

// if (anotherNumber === 1) {
//   anotherResult = 'One';
// } else if (anotherNumber === 99) {
//   anotherResult = 'Ninety-Nine';
// } else if (anotherNumber === 1000) {
//   anotherResult = 'One-Thousand';
// } else {
//   anotherResult = 'no match... :('
// }

// console.log(anotherResult);

// Switch Statments - Control Flow

// const number = 55;
// let result;

// switch (number) {
//   case 1: {
//     result = 'One';
//     break;
//   }
//   case 99:
//     result = 'Ninety-Nine';
//     break;
//   case 1000:
//     result = 'One-Thousand';
//     break;
//   default: 
//     result = 'No Match';
// }

// console.log(result);


// // Literal Syntax Numbers
// const literalNumber = 99;
// console.log(literalNumber);

// // Function Syntax
// // Perform a Type conversion in a non-constructor syntax
// console.log(Number(55));
// // Type Conversion String to a Number
// console.log(Number('33'));
// // NaN
// console.log(Number('44px'));

// // Constructor - creates a wrapper Object---
// // Avoid using it
// console.log(new Number(66));

// // Integers and Floating Points
// const price = 9.33;
// const quantity = 3;
// console.log(price * quantity);

// // Resolve Decimal places and floating points...
// const anotherPrice = 9.33 * 100;
// const anotherQuantity = 3;
// console.log(anotherPrice * anotherQuantity / 100);

// // Using parseInt with Radix - always use base 10! For Parsing Whole Numbers
// console.log(parseInt('55px', 10));

// // parseFloat For Parsing decimals
// console.log(parseFloat('55.9999999px'));

// console.log(Number('55e10'));

// // NaN
// console.log(Number('55.9999px'));

// // Same as Number but can look confusing with addtions.
// console.log(+'99.5555');

// On Not a Number : avoid Global NaN
// const result = Number('55px');
// console.log(isNaN(result));
// console.log(isNaN('I am a String!'));

// // Use this fixes string problem
// console.log(Number.isNaN(result));
// console.log(Number.isNaN('I am another string!'));

// console.log(Number.isInteger(66.));

// -----------------------
// const immutableNumber = 99;
// let referencedNumber = immutableNumber;

// referencedNumber = 44;

// console.log(immutableNumber);
// console.log(referencedNumber);


// // ------------------------------------------
// console.log(typeof 99);
// console.log(99 instanceof Number);
// console.log(Number('99') instanceof Number);
// console.log(new Number('99') instanceof Number);

// // Great way to test for something of a particular
// // type.
// console.log(Object.prototype.toString.call(99));


//  ------------------ BLUE = 99 BLACK = STRING
// console.log(Number.prototype);

// // Fix the amount of decimals
// console.log((99.12345678).toFixed(2));

// // makes it a Number
// console.log(parseFloat((99.12345678).toFixed(2)));

// // To Precision
// console.log(typeof(99.12345678).toPrecision(5));

// // Constructor - don't use
// console.log(new Number(99).valueOf(99));

// // String Literals:

// console.log("pizza 'hello'");
// console.log('pizza "Hello"');
// console.log('pizza \'hello\'');

// const pizza = 'Pepperoni'
// console.log('pizza is: ' + pizza);

// // USE!
// // Backticks are sweet: They are Template Literals:
// console.log(`pizza is: ${pizza}!`);

// // Multi Line String:
// console.log(`
// Pizza Is: 
// ${pizza}!
// `)

// // Don't Use
// // Strings always take over and convert other types to string via concatenation.
// console.log(String(55 + 11), String(55 + '11'));

// // Don't Use
// console.log(new String(55));

// -------------------------------------------

// String Properties and Indexes

// console.log('howdy'.length);

// console.log('pepperoni'['length']);

// // Find first Property of string
// console.log('Pepperoni'[0]);
// console.log('Pepperoni'[1]);

// // First Item / Last Item in String:
// const pizza = 'Pepperoni';
// console.log(pizza[0], pizza[pizza.length -1]);

// -----------------------------------------------

// Strings and Immutability: Below: The string is copied into the second constant and the copy is mutated.

// const immutableString = 'I shall not change';
// const uppercaseString = immutableString.toUpperCase();

// console.log(immutableString, uppercaseString);


// // Correctly Type Check Strings:
// console.log(typeof 'Pepperoni');
// console.log(typeof '0');

// console.log('Pepperoni' instanceof String);

// console.log(new String('Pepperoni') instanceof String);

// // Very Reliable:
// console.log(Object.prototype.toString.call('Pepperoni'));

//  -------------------------------------------------------

// Exploring String Methods
// console.log(String.prototype);

// console.log('Pepperoni'.indexOf('P'));
// console.log('Pepperoni'.indexOf('z'));

// console.log('Pepporoni'.includes('P'));

// console.log('Pepperoni'.replace('oni', 'fire'));

// console.log('Pepperoni'.slice(2, -1));

// // Make an Array
// console.log('Pepperoni~Plain'.split('~'));
// console.log('Pepperoni~Plain'.split('~')[0]);

// // Trim
// console.log('   4444 5555 6666 7777     ');
// console.log('   4444 5555 6666 7777     '.trim());
// console.log('   4444 5555 6666 7777     '.trim().length);


// ===================================================

// Booleans

// console.log(true, false);

// // Good for Debugging
// const argument= 'X';
// console.log(Boolean(argument));

// // Faster than above. Still makes it pass through a test.
// console.log(!!argument);

// // Empty Arrays and Objects are Truthy
// console.log(Boolean([]));
// console.log(Boolean({}));

// // Dont' Use...
// console.log(new Boolean(argument));

//  ---------------------------------------------------
// Type cheecking Booleans.

console.log(typeof true);
console.log(true instanceof Boolean);
console.log(new Boolean('') instanceof Boolean);

console.log(Object.prototype.toString.call(true));
