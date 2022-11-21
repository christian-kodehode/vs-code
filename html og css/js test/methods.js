// METHODS

// Number, string, boolean, array, ( object )
/*
let myString = "JavaScript";

myString.toUpperCase();

// console.log(myString.toUpperCase());

// console.log(myString.slice(-3, -1));
// console.log(myString.substring(3, 6));
// console.log(myString.substr(2, 5));
// console.log(myString.replace("Script", "bønner"));

// console.log(myString[4]);
// console.log(myString.split("a"));

const x = 15;

console.log(`${x} is a ${typeof x}.`);
console.log(`${x} is a ${typeof x.toString()}.`);

let string = `Dette er variabelen 'string'.`;

let h2 = (document.getElementById("h2").innerHTML = string);


const string = "Dette er en string.";

console.log(string.toLocaleUpperCase());

*/
//

const makeNumberArray = (size, maxNum) => {
  const numArray = [];
  for (let i = 0; i < size; i++) {
    numArray.push(Math.floor(Math.random() * maxNum) + 1);
  }
  return numArray;
};

const randomNumberArray = makeNumberArray(1e13, 150);

console.log(randomNumberArray);
