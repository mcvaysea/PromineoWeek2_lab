/* let object1 = "Pineapple";
let object2 = "pen";

console.log("I have a " + object1 + '-' + object2); */

/* //Boolean values
// Operators are:
// ==
// >
// <
// >=
// <=

// && means (AND) and || means (OR) //This one is a special case and is used differently than the others above.

/* console.log(5 == 5);
console.log( 5 < 4);
console.log(6 > 1);
console.log(5 > 4 && 4 < 10);
console.log(5 > 4 && 4 > 10);
console.log(5 > 4 || 4 < 10);
console.log(5 < 4 && 1 == 1);
console.log(5 < 4 || 1 == 1); */

//Boolean Expression -- Legally Old Enough To Drive Example:
/* 
Imagine that we want to know if someone is old enough to drive.  To determine that, we need to compare that individuals age:  currentAge   to the age required to drive:  ageRequiredToDrive

If the person's currentAge is greater than or equal to (>=) ageRequiredToDrive, then the person can drive. If not, the person cannot legally drive. true and false are the only two options. 

Here is an example of how this could be represented in JavaScript: 

var ageRequiredToDrive = 16;

var currentAge = 14;

var canPersonDrive = currentAge >= ageRequiredToDrive;

console.log(canPersonDrive); */

/* var ageRequiredToDrive = 16;
var currentAge = 15;

var canPersonDrive = currentAge >= ageRequiredToDrive;
var canTheyDrive = ageRequiredToDrive <= currentAge;

console.log(canPersonDrive);
console.log(canTheyDrive);

// use '===' (STRICTLY EQUAL) to verify variable type because "3" is a STRING and 3 is an INTEGER
console.log("3" == 3);
console.log("3" === 3); */

/* // Conditions with IF

var firstName = 'Shane';

if (firstName == 'Sean') {
    console.log('Hello '+ firstName)
} */

/* // Conditions with IF and ELSE

var firstName = "Sam";

if (firstName == "Sean") {
  console.log("Hello " + firstName);
} else {
  console.log("Hey, " + firstName);
} */

// Conditions with IF and ELSE and ELSE-IF

/* var costOfMilk = 4.99;

if (costOfMilk < 2) {
  console.log("We will buy 2 gallons");
} else if (costOfMilk < 3) {
  console.log("We will only buy 1 gallon");
} else {
  console.log("That's too expensive, no thank you.");
} */

// Conditions using CASE statements

/* var yourGrade = "A";

switch (yourGrade) {
  case "A":
    console.log("Your grade is between 90-100");
    break;
  case "B":
    console.log("Your grade is between 80-89");
    break;
case "C":
    console.log("Your grade is between 70-79");
    break;
    default:
        console.log("Your grade is below 69");
} */

// Nesting logical/boolean flows

/* var a = 5;
var b = 6;

if (a == 5) {
  if (b == 6) {
    console.log("a is 5 and b is 6");
  }
}

if (a != 6) {
    if (b != 5) {
        console.log("a is not 5 and b is not 6");
    }
}

// Same statement but flattened for cleaner code

if (a == 5 && b == 6) {
  console.log("your a is 5 and your b is 6");
}

// Nested IF-ELSE to prove logic
if (a == 6 && b == 5) {
  console.log("your a is 5 and your b is 6");
} else {
  console.log("either 'a' does not equal 5 or 'b' does not equal 6");
}
 */

//Boolean Expression -- Legally Old Enough To Drive Example with IF statement
/* var ageRequiredToDrive = 16;
var currentAge = 14;
var oldEnoughToDrive = currentAge >= ageRequiredToDrive;

if (oldEnoughToDrive) {
  console.log("This person is " + currentAge + " and is old enough to drive.");
} else {
  console.log("This person is " + currentAge + " and not old enough to drive.");
}

// Cleaner code
if (currentAge >= ageRequiredToDrive) {
  console.log("Yes you are " + currentAge + " so can drive");
} else {
  console.log(
    "Sorry bud, you are only " + currentAge + " so you are too young to drive."
  );
} */

// if - else if - else Example:

var costOfEggs = 1.99;
var numberOfDozensToPurchase = 0;

if (costOfEggs > 3) {
  numberOfDozensToPurchase = 1;
} else if (costOfEggs > 2) {
  numberOfDozensToPurchase = 2;
} else if (costOfEggs > 1) {
  numberOfDozensToPurchase = 3;
} else {
  numberOfDozensToPurchase = 4;
}

console.log("I will buy " + numberOfDozensToPurchase + " dozen eggs, please.");
