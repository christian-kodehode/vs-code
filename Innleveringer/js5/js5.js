/* Excercise #1:
      Fix the formatText function below such that it fits the given specification:
       * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
*/

// testrun:
console.log(formatText("      Lorem IPSUM.    ")); // expected output (without quotes): "lorem ipsum."
/**
 * formatText function
 * returns given parameter (str) with leading and trailing spaces removed, and all letters converted to lowercase.
 */

// EXERCISE #1 SOLUTION - CHRISTIAN R
// added str = str.trim().toLowerCase()

function formatText(str) {
  str = str.trim().toLowerCase();
  return str;
}

/* Excercise #2:
      Change the function in excercise #1 to be an arrow function. 
      If you're getting errors: google javascript hoising. You may need to move the console.log(formatText("      Lorem IPSUM.    ")) from line 7.

      If you're having issues with this excercise, try to first convert the excercise2alternative arrow function below to be a normal named function:
*/

console.log("Exercise 2:");

// EXERCISE #2 SOLUTION - CHRISTIAN R
// added parameter 'str'
// added str = str.trim().toLowerCase()
// changed return value to 'str'
// logged in console for testing

const excercise2alternative = (str) => {
  str = str.trim().toLowerCase();
  return str;
};

console.log(excercise2alternative("      Lorem IPSUM.    "));

/* Excercise #3: The autoReply function below takes a function as parameter, call (run/execute) the autoReply function with console.log as callback function.
                 Doing so, you should see "This is an automated response." in the console.
*/
console.log("Exercise 3a:");

function autoReply(customFunction) {
  customFunction("This is an automated response.");
}

// EXERCISE #3a SOLUTION - CHRISTIAN R
// calling console.log with autoReply function

autoReply(console.log);

/* Excercise #3b: Create a function that will display some provided text on the website.
                  For example, assuming you named your function: display
                  I should be able to call (run/execute) it with display("hello world!")
                  That should then display: hello world!
                  on the webpage.

                  And then call the autoReply function with your display function.
*/

// EXERCISE #3b SOLUTION - CHRISTIAN R
// created a function that: 1. takes a string as an argument,
// 2. creates an HTML-element, and 3. appends  the string-argument to the HTML-element
// called the function with a string as argument
// called the function from the autoReply function

const display = (txt) => {
  const hr = document.createElement("hr");
  document.body.append(txt, hr);
};

display("Exercise 3b:");
display("hello world!");
autoReply(display);

/* Excercise #4: Create a function that takes two arguments:
                 1. a callback function
                 2. a string

                 And then call (run/execute) your function
                 (this is similar to Excercise #3 but with a custom message instead of only "This is an automated response.")
*/

// EXERCISE #4a SOLUTION - CHRISTIAN R
// created a funtion that: 1. takes a function and a string as arguments,
// and 2. runs the callback function with the string as an argument
// called the function with the callback function and a string as arguments

const funcyFunc = (func, str) => {
  func(str);
};

funcyFunc(display, "Hei igjen!");

/* Excercise #4b: In excercises 3 & 4 you've been providing named functions as callback functions, try to call (run/execute) both functions with anonymous functions instead.
                  Use both the function() {} syntax, and then also arrow function.
*/

// EXERCISE #4b SOLUTION - CHRISTIAN R
// created a function that takes 2 arguments, 1 string and 1 anonymous function
// the anonymous function creates a 'hr' HTML-element and a text-string and appends it to the HTML body-element
// the main funtion calls on the anonymous function and also console.log the string argument

function funcFourB(
  str,
  func = () => {
    const hr = document.createElement("hr");
    const txt = "Anonym callback 1";
    document.body.append(txt, hr);
  }
) {
  func();
  console.log(str);
}

funcFourB("Anonym callback 2");

/* Excercise #5: Create a function takes the following parameters:
                 1. An array
                 2. A callback function

                 In your function write code that will loop through a given array,
                 and with each iteration it will call your provided callback function.

                 Example behaviour, lets say you named your function forEach, if we call it with:
                 forEach(threeFruits, console.log) // would display: 
                  apple
                  banana
                  mango
                 or if we call it with:
                 forEach(fiveWords, console.log) // would display: 
                  one
                  two
                  three
                  four
                  five

                (For this excercise please use traditional loops (not array methods), for-loop, while loop, or for-of loop)
*/

const fiveWords = ["one", "two", "three", "four", "five"];
const threeFruits = ["apple", "banana", "mango"];

// EXERCISE #5 SOLUTION - CHRISTIAN R
// created a function that: 1. takes a callback function and an array as arguments,
// 2. runs a loop through the array,
// and 3. calls the callback function for each array index with the corresponding array value as the argument
// call on the function twice, each with the callback function as one argument and a unique array as the second argument

const funcyFive = (func, arr) => {
  for (i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
};

funcyFive(display, fiveWords);
funcyFive(console.log, threeFruits);

/* Excercise #6: Similar to task 5, but instead of first declaring a function and then writing a loop by hand:
                 Use an array method that loops through an array, and provide a callback function that will either console log or display each array element
                 Resources: https://javascript.info/array-methods
                            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

                 Bonus task: see if you can get the array-method to also display the index of each element in addition to just the element, for example:
                             apple at index 0
                             banana at index 1
                             and so on...
*/

// EXERCISE #6 SOLUTION - CHRISTIAN R
// created a function that: 1. takes two arguments, a callback function and an array,
// 2. runs through the array with the forEach method,
// and 3. calls the callback function for each array index using the array value as argument
// created a callback function that takes a string as argument and console.log the string
// call the function twice, with the callback function and a unique array as arguments

const funcySix = (func, arr) => {
  arr.forEach((element) => {
    func(element);
  });
};

const logInConsole = (str) => {
  console.log(str);
};

funcySix(logInConsole, fiveWords);
funcySix(logInConsole, threeFruits);

/* Excercise #7: In Excercise #6 your task was to iterate through an array and just display the results, in this task try to use an array method that will 
                 Both iterate through an array and also return a new array with each number changed in value, for example:
                 the following (replace someArrayMethod with an actual array method, and yourCallBackFunctionLogic with some code)
                 here it should multiply each element by 3 and then tripleNums should contain all the numbers multiplied by 3:

                 let tripleNums = nums.someArrayMethod(...yourCallBackFunctionLogic...)
                 console.log(tripleNums) // [3,6,9,12,15]
*/

const nums = [1, 2, 3, 4, 5];

// EXERCISE #7 SOLUTION - CHRISTIAN R
// created a function that takes a number as argument and returns triple its value
// declared a variable that uses .map() on an array and calls the above function for each index value
// console.log the above variable

const tripleFunction = (num) => {
  num = num * 3;
  return num;
};

let tripleNums = nums.map(tripleFunction);

console.log(tripleNums);

/* Excercise #8: Use a different array method that will return a new array based on some filter,
                 For example lets say we just want odd numbers from the nums array: 
                              let oddNumbers = nums.someArrayMethod(...yourCallBackFunctionLogic...) 
                              console.log(oddNumbers) // should display: [1,3,5]


                  Resources: https://javascript.info/array-methods
                             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// EXERCISE #8 SOLUTION - CHRISTIAN R
// created a function that filters out all but odd numbers
// created variable that uses .filter() to check each index of nums if it qualifies
// console.log result

const oddFunction = (num) => {
  return num % 2;
};

let oddNums = nums.filter(oddFunction);

console.log(oddNums);

/* Excercise #9: Open excercise: Look through the list of array methods in the previous excercise Resource links (or google a bit yourself)
                 and try to use some different array methods which you haven't seen before, and/or try to combine (chain together) multiple array methods.
*/

// EXERCISE #9 EXPERIMENTING - CHRISTIAN R

const newNums = [1, 3, 5, 7, 9, 11, 13];
const cars = ["Mercedes", "Toyota", "Nissan", "Ford", "BMW", "Ferrari"];
const animals = ["Giraffe", "Elephant", "Tiger", "Gorilla", "Shark"];

function containsOnlyOddNumbers(num) {
  return num % 2;
}

function isEightOrHigher(num) {
  if (num >= 8) {
    return true;
  } else {
    return false;
  }
}

// check if an array contains only odd numbers
console.log(newNums.every(containsOnlyOddNumbers));

// connect all elements of an array into a single string
console.log(cars.join());

// finds first element in newNums that is equal or higher than 8
console.log(newNums.find(isEightOrHigher));

// copies 2 values of indexes starting at index 0, into 2 indexes starting at index 3
console.log(animals.copyWithin(3, 0, 2));
