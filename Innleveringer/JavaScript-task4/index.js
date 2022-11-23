// js code
/*
const enterKey = (event) => {
  if (event.keyCode == "Enter") {
    numToText();
  }
};
*/

// GJØRE OM ET TALL TIL TEKST
// (F.eks. "257" blir til "TO HUNDRE OG FEMTISYV")

const numToText = (input = document.getElementById("num-in").value) => {
  const inputArray = input.split("");
  let out = "";
  const h = "HUNDRE";
  const t = "TUSEN";
  const m = "EN MILLION";
  const err = "INPUT MÅ VÆRE ET HELTALL MELLOM 0 og 999.";
  const og = "";
  const ogg = "";
  const outArray = [];
  const uEnere = ["NULL", "EN", "TO", "TRE", "FIRE", "FEM", "SEKS", "SYV", "ÅTTE", "NI"];
  const bEnere = ["NULL", "ETT", "TO", "TRE", "FIRE", "FEM", "SEKS", "SYV", "ÅTTE", "NI"];
  const teens = [
    "TI",
    "ELLEVE",
    "TOLV",
    "TRETTEN",
    "FJORTEN",
    "FEMTEN",
    "SEKSTEN",
    "SYTTEN",
    "ATTEN",
    "NITTEN",
  ];
  const tiere = [
    "NULL",
    "TI",
    "TJUE",
    "TRETTI",
    "FØRTI",
    "FEMTI",
    "SEKSTI",
    "SYTTI",
    "ÅTTI",
    "NITTI",
  ];

  switch (input.length) {
    case 0:
      out = err;
      break;
    case 1:
      out = uEnere[Number(input)];
      break;
    case 2:
      if (input[1] == 0) {
        out = tiere[Number(input[0])];
      } else if (input[0] == 1) {
        out = `${teens[Number(input[1])]}`;
      } else {
        out = `${tiere[Number(input[0])]} ${uEnere[Number(input[1])]}`;
      }
      break;
    case 3:
      if (input[1] == 0 && input[2] == 0) {
        out = `${bEnere[Number(input[0])]} ${h}`;
      } else if (input[1] == 0 && input[2] != 0) {
        out = `${bEnere[Number(input[0])]} ${h} OG ${uEnere[Number(input[2])]}`;
      } else if (input[1] == 1) {
        out = `${bEnere[Number(input[0])]} ${h} OG ${teens[Number(input[2])]}`;
      } else if (input[1] > 1 && input[2] == 0) {
        out = `${bEnere[Number(input[0])]} ${h} OG ${tiere[Number(input[1])]}`;
      } else if (input[1] > 1 && input[2] != 0) {
        out = `${bEnere[Number(input[0])]} ${h} OG ${tiere[Number(input[1])]} ${
          uEnere[Number(input[2])]
        }`;
      }
      break;
    default:
      out = err;
  }

  if (Number(input) < 0) {
    out = err;
  }

  if (input[0] == "0") {
    out = err;
  }

  document.getElementById("ans").innerText = `${out}`;
};

// LAGE SIRKLER MED TALL INNI (DIV'ER) FOR ALLE PRIMTALL MELLOM 2 OG ET GITT INPUT-TALL

// const drawPrimes = (input = document.getElementById("num-two").value) => {
//   //
//   let primeArray = [2, 3];
//   let isPrime = true;

//   if (Number(input) < 2) {
//     console.log("Input må være minimum 2.");
//   } else if (Number(input) > 999) {
//     console.log("Input kan ikke være større enn 999.");
//   } else {
//     console.log(`Input er "${input}"`);
//     for (let i = 2; i < Number(input); i++) {}
//     console.log(`primeArray: ${primeArray}`);
//   }

// if (Number(input) < 2) {
//   console.log("Input må være minimum 2.");
// } else if (Number(input) > 999) {
//   console.log("Input kan ikke være større enn 999.");
// } else {
//   for (let i = 0; i < Number(input); i++) {
//     record.push(1);
//   }
//   console.log(`record: ${record}`);
//   for (let prime = 2; prime < max + 1; prime++) {
//     if (record[prime]) {
//       for (let m = prime * prime; m < Number(input); m += prime) {
//         record[m] = 0;
//       }
//     }
//   }
//   console.log(`record: ${record}`);
//   for (let checked = 2; checked < Number(input); checked++) {
//     if (record[checked]) {
//       primes.push[checked];
//     }
//   }
//   console.log(`record: ${record}`);
//   console.log(`primes: ${primes}`);
//   return primes;
// }
// };
// MAKE CIRCLES

// HTML

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css" />
//     <script src="main.js" defer></script>
//   </head>
//   <body>
//     <input id="inputNum" type="number" />

//     <button onclick="makeCircles()">Lag sirkler</button>
//     <div id="circleContainer"></div>
//   </body>
// </html>

// JAVASCRIPT

// const inputNum = document.querySelector("#inputNum");
// const circleContainer = document.querySelector("#circleContainer");
// const makeCircles = () => {
//   while (circleContainer.firstChild) {
//     circleContainer.removeChild(circleContainer.firstChild);
//   }
//   if (inputNum.value && inputNum.value < 1000) {
//     for (let i = 0; i < inputNum.value; i++) {
//       let circle = document.createElement("div");
//       circle.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//       circle.classList.add("circle");
//       circle.textContent = i + 1;
//       circleContainer.appendChild(circle);
//     }
//   } else {
//     window.alert("Please input a number between 1 and 1000");
//   }
// };
//
