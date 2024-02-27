// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// First we create a variable "name" and set it to the string "Dane".
// Then we check if the name equals "Mary". The condition is false so
// the console log displays "How do you do?"
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare two variables, secret and code. Secret is not assigned a value, but code is set to the number 123.
// Then we check if the code is 123. The condition is true so we assign the string 'super' to the 'secret' variable
// and multiply the code by 2. Code is now 246.
// Now there's a second condition. Since code is not greater than 250 (It's only 246), the condition is false so we do not change
// the secret variable.
// The console log should show "super".

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we declare 3 variables: isStudent is assigned the boolean true, age is assigned the number 34 and zip is assigned 55407.
// (Side note: Ideally that should be assigned as a text string because even though it is numeric we don't typically perform 
// calculations with it.
// The zip code is typically used as an identifier; but that's getting into database design.)
// However, in this case we check if isStudent is true and the zip code is greater than 80000. This condition is false because although
// isStudent equals true, the zip code is not greater than 80000, so we move to
// the next conditional clause. We check if isStudent is false OR the age is under 30.
// This condition is false as well because neither option is true.
// Since isStudent is true, we console log "Welcome to Prime!". The statement to console log about the weather is not used because we
// the previous condition is true and the execution stopped.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // FIX - colorTwo is not modified. Add "colorTwo = 'purple';" to the code block
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the condition used in this statement is OR (||) which will evaluate as true even if only one condition is met. In this instance
// it would still evaluate to true, but other values may not. The correct operator should be && which only evaluates as true if 
// both conditions are met.

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - The code isn't as clear as it could be. The comparison used here is less than or equal to (<=). minAge is actually less than or
// equal to age, but the description states 'age is greater than or equal to minAge'. 
// To ensure it is performing the correct comparison, use >= instead. I would rewrite this as age >= minAge.
// Also, the code as written would log "no entry" because the condition evaluates true. 'no entry' should be in the else block and
// 'enter' should be in the block that executes when the condition is true.

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

