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

