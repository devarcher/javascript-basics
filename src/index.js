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

// console.log(typeof true);
// console.log(true instanceof Boolean);
// console.log(new Boolean('') instanceof Boolean);

// console.log(Object.prototype.toString.call(true));



// Functions

// 3 Types.

// Type 1 - Function Declaration:

// function makeCar() {
//   console.log('Making a car....');
// }
// makeCar();

// // TYPE 2 Function Expression: Anonymous or Named
// // const makeCarExpression = function makeCar() {};
// // or Anonymous
// const makeCarExpression = function myFunction () {};

// console.log(makeCarExpression.name);

// // TYPE 3 Arrow Functions: Must be Function Expression
// const makeCarArrow = () => {
//   console.log('Making car...');
// };

// makeCarArrow();

// // Shorthand version of arrow function
// const makeCarArrowShorthand = () => console.log('Short');

// makeCarArrowShorthand();


// Function Parameters and Defaults
// name = parameter (On the Recieving end of the function.)  Parameters come THROUGH the function
// function makeCar(name) {
//   // name = name || 'Lexus';

//   if (!name) {
//     name = "Lexus";
//   }
//   console.log(`Making Car: ${name.toUpperCase()}`)

// }

// // Strings here are Arguments (pass an Arugment in, and accept it as a Paramenter. ) Arguments are PASSED INTO the FUNCTION.
// makeCar('Porche');
// makeCar('Ferrari');
// makeCar();

// // Para

// Rest Paramenters and Arguments
// function makeCarPrice() {
//   console.log(arguments);
//   const total = Array.from(arguments).reduce((prev, next) => prev + next);
//   console.log(total);
//   console.log(`Total: $${total} USD`)
// }

// makeCarPrice(11, 44, 55, 99, 22);

// New Way of doing things rest paramenter: ...params => "The Rest of the Arguments"
// function makeCarPriceRest(...params) {
//   console.log(Array.isArray(params)); 
//   const total = params.reduce((prev, next) => prev + next);
//   console.log(`Total = $${total}`);
// }

// makeCarPriceRest(99, 88, 77, 11, 44);


// ---------------------------------------------------------------
// Function Return Values - Self Contained Piece of logic that is repeatable.
// function makeCarPrice(...params) {
// const total = params.reduce((prev, next) => prev + next);
// return total;
// };

// const makeCarPrice = (...params) => {
//   const total = params.reduce((prev, next) => prev + next);
//   return total;
// };

// const makeCarPrice = (...params) => params.reduce((prev, next) => prev + next);

// const totalPrice = makeCarPrice(11, 22, 33, 44, 10100);
// console.log(`Total: ${totalPrice}`);

// // -----------------------
// const makeCarPrice = (...params) => {
//   const total = params.reduce((prev, next) => prev + next);
//   return total;
// };

// const makeCarPriceArrow  = (...params) => params.reduce((prev, next) => prev + next);

// console.log(`Total: ${makeCarPrice(11, 22, 33, 44, 10100)}`);
// console.log(`Total: ${makeCarPriceArrow(99, 43, 234)}`);
// ------------------------------------------------------------ Scope

// function makeCarPartID(id) {
//   const theId = `CAR_PART_${id}`;
//   return function(name) {
//   return `${theId}_${name.toUpperCase()}`;
//     };
// }

// const carPartId = makeCarPartID('x83jk');
// console.log(carPartId('Left Door'));
// console.log(carPartId('Right Door'))
// console.log(carPartId('Trunk'))

// const anotherCarPartId = makeCarPartID('8sadfjk;');
// console.log(anotherCarPartId('Left Door'));
// console.log(anotherCarPartId('Right Door'))
// console.log(anotherCarPartId('Trunk'))

// IIFE Immediately invoked Function Expression:
// const carPartId = (function(id) {
//   const theId = `CAR_PART_${id}`;
//   return function (name) {
//     return `${theId}_${name}`;
//   };
// })('xfaj5');

// console.log(carPartId('Left Door'));
// console.log(carPartId('Right Door'));

// --------------------------------------

// Functions and Callbacks
// function carPartId(name, fn) {
//   const theId = `CAR_PART_x8z0s1`;
//   return fn(`${theId}_${name}`);
// }

// const carPart = carPartId('Left Door', function(id) {
//   return `Car Part ID: ${id}`;
// });

// console.log(carPart);

// Function Context "THIS" ____________________------
// const firstCar = { id: 'x8kD' };
// const secondCar = { id: 'xsadf' };
// const thirdCar = { id: 'h9ajsfdkJ'};

// function carPartId(name, quantity) {
//   console.log(`${this.id}_${name}_${quantity}`);
// }

// // .bind (For Multiple uses)
// const boundThirdCar = carPartId.bind(thirdCar);
// boundThirdCar('Windscreen', 99);
// boundThirdCar('SeatBelt', 9);
// boundThirdCar('Exhaust', 11);

// // Call = C = Comma
// carPartId.call(firstCar, 'Ferrari', 12);
// // Apply = A = Array
// carPartId.apply(secondCar, ['Coolio', 21]);


// -----------------------------------------
// Objects

// const drink = {
//   id: 'xhs8Pla',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// const drinkReference = drink;
// drinkReference.name = 'Peach';

// console.log(drink === drinkReference);

// console.log(new Object());
// console.log(Object());

// const drink = {
//   id: 'xhs8p1a',
//   name: 'Lemonade',
//   price: 99,
//   getDrinkDetails() {
//     return `Drink ${this.name} (${this.price})`;
//   },
//   'abc 123': 'I am the value!',
//   100: 'I am a number!',
// };

// console.log(drink.getDrinkDetails());

// const myId = 'id';

// console.log(drink[myId]);
// console.log(drink.name);
// console.log(drink.price);

// console.log(drink['abc 123']);
// console.log(drink['100']);

// Short Hand Properties

// const id = 'xhs8P1a';
// const name = 'Lemonade';
// const price = 99;

// const someKey = 'name';

// const drink = {
//   id,
//   [someKey]: name,
//   price,
//   getDrinkDetails() {
//     return `Drink ${this.name} (${this.price})`;
//   },
// };

// console.log(drink);

// ----------------------------------------
// Destructuring

// const drink = {
//   id: 'xhs8Pla',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// const myDrinkId = drink.id;
// const myDrinkName = drink.name;
// const myDrinkSalePrice = drink.price.sale;

// console.log(myDrinkId, myDrinkName, myDrinkSalePrice);

// // Destructuring = VERY CLEAN AND GOOD



// // const { id, name, price: { full }} = drink;
// // console.log(id, name, full);

// // const id = 1234;

// const { 
//   // id: myId, 
//   price: { full },
//   ...rest
// } = drink;

// // const { sale, full } = drink.price;

// console.log(name, full, rest);


// -------------------------------------------------

// Property and Value Existence


// const drink = {
//   id: 'sfjk8',
//   name: 'Lemonade',
//   price: {
//     sale: 99, 
//     full: 129,
//   },
// };

// if (drink.id) {
// console.log(drink.id);
// }

// for (const prop in drink) {
//   console.log(drink[prop]);
// }

// Value Exists:::

// // Imperative - Spelled out for the computer. Calculate it.
// for (const prop in drink) {
//   if (drink[prop] === 'Lemonade') {
//     console.log(drink[prop])
//   }
// }

// // Decaritive> Do this for me.
// console.log(Object.values(drink));


// const hasLemonade = Object.values(drink).includes('Lemonade');
// console.log(hasLemonade);

// Property Existence 
// console.log(drink.hasOwnProperty('name'));


// // Safest way to do this! x.prototype...!!!!!!!!!!!!
// console.log(Object.prototype.hasOwnProperty.call(drink, 'name'))

// console.log(Object.keys(drink).includes('name'));

// ---------------------------------------------
// Adding and Updating Objects

// const drink = {
//   id: 'xhs8Pla',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// // drink.brand = 'My Drinks Co.';
// // drink.name = 'Peach';

// // Adding / Updating in one line
// function propUpdate(prop, value) {
//   drink[prop] = value;
// }

// propUpdate('brand', 'My Drinks Co')
// propUpdate('name', 'Peach');
// propUpdate('size', '16oz');

// console.log(drink);

//  -------------------------------------------------
//  Removing Object Properties

// const drink = {
//   id: 'xhs8P1a',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// // // slow to do this...
// // delete drink.name;

// // Performance Approach. Property still exists.
// drink.name = undefined;


// Non Destructive (Unmutated Approach)
// const { price, ...rest } = drink;
// console.log(price, rest, drink);

//  ----------------------------------------------------

// // Shallow and Deep Object Cloning
// const drink = {
//   id: 'xhs8P1a',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// Assigns From Right To Left. Drink goes into New Object Literal
// const drinkClone = Object.assign({}, drink);
// drinkClone.id = 'abcd';

// // Shallow Cloning only clones TOP LEVEL. Not second level Objects.
// drinkClone.price.sale = 79;


// Shallow Copy with "Spread" 
// const drinkClone = {...drink};
// drinkClone.id = 'abcd'
// drinkClone.price.sale = 79;



// Deep Cloning ALL levels. Stringifing then parsing. No Functions in JSON.
// JSON

// const drinkStringified = JSON.stringify(drink);
// const drinkClone = JSON.parse(drinkStringified);
// drinkClone.id = 'abcd'
// drinkClone.price.sale = 79;

// console.log(drink);

// ----------------------------------------------------
// Merging Objects:

// const drink = {
//   id: 'xhs8pla',
//   name: 'Lemonade',
// };

// const price = {
//   sale: 99,
//   full: 129,
// };

// // Assign and Spread Operator
// // const mergedDrink = Object.assign({}, drink, { price });
// const mergedDrink = {...drink, ...{ price } };

// console.log(drink, price);
// console.log(mergedDrink);

//  --------------------------------------------------
// Correctly Type Checking Objects

// const drink = {
//   id: 'xhs9Pla',  
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// function getType(obj) {
//   return Object.prototype.toString
//     .call(obj)
//     .slice(8, -1)
//     .toLowerCase();
// }

// console.log(getType(drink));
// console.log(getType([]));
// console.log(getType(null));

// console.log({} instanceof Object);
// console.log([] instanceof Object);

// // ALWAYS USE x.prototype.....
// console.log(Object.prototype.toString.call(drink));
// console.log(Object.prototype.toString.call(null));
// console.log(Object.prototype.toString.call([]));


// ------------------------------------------------------
// Imperative Object Literals
//  "In" Pulls from Prototype.
// const drink = {
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };

// const drinkWithId = Object.create(drink);
// drinkWithId.id = 'xh8ads';

// console.log('name' in drinkWithId);

// for (const prop in drinkWithId) {
//   if (drinkWithId.hasOwnProperty(prop)) {
//     console.log(prop, drinkWithId[prop]);
//   }
// }

// console.log('-----')



// // For...in Loop. OBJECTS ARE UNORDED DATA STRUCTURES.  
// // Prop aliases every Property.
// // IN key word. For every key in every Object...
// // SQUARE Brackets get to each value in Object.
// for (const prop in drink) {
//   const value = drink[prop];
//   if (Object.prototype.toString.call(value) === '[object Object]') {
//     for (const key in value) {
//     console.log(key);
//     }
//   } // console.log(drink[prop]);
// }

// Declaritive....DOesn't iterate over Inheirited.
// const drink = {
//   id: 'sjfd9',
//   name: 'Lemonade',
//   price: {
//     sale: 99,
//     full: 129,
//   },
// };


// Object.keys(drink).forEach(function (prop) {
//   console.log(drink[prop], prop);
// });

// console.log(Object.entries(drink));

// -------------------------------------------------------

// Arrays!

// const drinks = ['Lemonade', 'Lime', 'Peach', 'Cola'];

// drinks[0] = 'Diet Lemonade';

// Accessing Array positions / last position
// console.log(drinks);
// console.log(drinks[0]);
// console.log(drinks[drinks.length - 1]);

// Clear Array but keeping constant together.
// drinks.length = 0;
// drinks.splice(0, drinks.length);
// console.log(drinks);

// -------------------------------------------------------

// Multi-Dimensional Array (An Array with and array inside it)

// const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 39]];

// Two APproaches
// const drinkOne = drinks[0];
// const drinkTwo = drinks[1];
// const drinkThree = drinks[2];


// console.log(`Drink: ${drinkOne[0]}, Price: ${drinkOne[1]}`);
// console.log(drinkTwo);
// console.log(drinkThree);

// // This Approach
// console.log(`Drink: ${drinks[0][0]}, Price: ${drinks[0][1]}`);


// ---------------------------------------------------------------
// Destructuring Arrays
// const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 39]];

// const [ one, [a, b], ...rest ] = drinks;

// console.log(one, a, b, rest);


// -------------------------------------------------------------
// Adding Array Elements

// const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 39]];


// Mutable Approach. Mutates Original Drinks Array
// Beginning
// drinks.unshift(['Water', 'Free']);

// // end
// drinks.push(['Cola', 129]);

// console.log(drinks);

// Immutable Approach is safer - COPIES Original Array light LightRoom.
// const newDrinksArray = [['Water', 'Free'], ...drinks, ['Cola', 129]];
// console.log(newDrinksArray);

// Adding something into the Middle
// const index = 1;

// console.log ([
//   ...drinks.splice(0, index),
//   ['Mojito', 699],
//   ...drinks.splice(index -1),
// ]);

// console.log(drinks);


//--------------------------------------------------------------
// Removing Array Elements

// const drinks = ['Lemonade', 'Lime', 'Peach']

// beginning (Mutable)
// const removedReturned = drinks.shift();
// console.log(removedReturned);
// console.log(drinks);

// //en
// const removed = drinks.pop();
// console.log(removed);

// // Immuntable
// const index = drinks.length - 1;
// const newDrinks = [...drinks.slice(0, index), ...drinks.slice(index + 1)];
// console.log(newDrinks);
// console.log(drinks);


// ---------------------------------------------------------
// Shallow and Deep Array Cloning

// const drinks = [['Lemonade', 99], ['Lime', 99], ['Peach', 89]];

// All Shallow Approach
// const drinksClone = [...drinks];
// const drinksClone = drinks.slice();
// const drinksClone = Array.from(drinks);


// Deep Array Approach => JSON
// const drinksClone = JSON.parse(JSON.stringify(drinks));

// drinksClone[0][1] = 1000;

// console.log(drinksClone);
// console.log(drinks);

// --------------------------------------------------------------
//  Merging Arrays

// const drinks = [['Lemonade', 99], ['Lime', 99]];
// const newDrinks = [['Peach', 89]];

// // const merged = drinks.concat(newDrinks);
// // console.log(merged);


// // Spread Operator
// // const merged =[...drinks, ...newDrinks];

// // Value only:
// const merged = [...drinks, newDrinks];
// console.log(merged);
// console.log(drinks);
// console.log(newDrinks);

// ----------------------------------------------

// Reversing and Sorting Arrays 

// const drinks = [
//   { name: 'Lemonade', price: 79 },
//   { name: 'Peach', price: 99 },
//   { name: 'Lime', price: 89 },
// ];

// // // console.log(drinks.reverse());
// // console.log(drinks.sort(function (a, b) {
// //   return a.price - b.price;
// // }));

// // console.log(drinks.sort(function (a, b) {
// //   return b.price - a.price;
// // }));

// // Good case for Arrow Function
// console.log(drinks.sort((a, b) => b.price - a.price));


// --------------------------------------------------
// // Type Check Arrays
// // Arrays are Objects.
// console.log(typeof []);
// //  Correct - quick check
// console.log([] instanceof Array);

// // Best option - for quick aand easy - Object with a Static method. Not a new instance.
// console.log(Array.isArray([1, 2, 3, 4]));

// // Bullet Proof - wrap it in a function.
// console.log(Object.prototype.toString.call([]));