// js code
/*
const enterKey = (event) => {
  if (event.keyCode == "Enter") {
    numToText();
  }
};
*/

// GJØRE OM ET TALL TIL TEKST
// (F.eks. "257" blir til "TO HUNDRE OG FEMTI SYV")

const numToText = (input = document.getElementById("num-in").value) => {
  let out = "";
  let outEn = "";
  let outTo = "";
  let outTre = "";
  const err = "INPUT MUST BE AN INTEGER BETWEEN 0 and 1 000 000 000.";
  const nullFirst = "THE FIRST DIGIT CANNOT BE 0.";
  const h = "HUNDRED";
  const t = "THOUSAND";
  const mFlere = "MILLION";
  const mEn = "MILLION";
  let m = "";
  const and = "AND";
  const uEnere = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
  const bEnere = ["", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"];
  const teens = [
    "TEN",
    "ELEVEN",
    "TWELVE",
    "THIRTEEN",
    "FOURTEEN",
    "FIFTHEEN",
    "SIXTEEN",
    "SEVENTEEN",
    "EIGHTEEN",
    "NINETEEN",
  ];
  const tiere = [
    "",
    "TEN",
    "TEWNTY",
    "THIRTY",
    "FORTY",
    "FIFTY",
    "SIXTY",
    "SEVENTY",
    "EIGHTY",
    "NINETY",
  ];
  const ener = input.charAt(Number(input.length - 1));
  const tier = input.charAt(Number(input.length - 2));
  const hundrer = input.charAt(Number(input.length - 3));
  const tusener = input.charAt(Number(input.length - 4));
  const tiTusener = input.charAt(Number(input.length - 5));
  const hundreTusener = input.charAt(Number(input.length - 6));
  const millioner = input.charAt(Number(input.length - 7));
  const tiMillioner = input.charAt(Number(input.length - 8));
  const hundreMillioner = input.charAt(Number(input.length - 9));
  let inputLast = [];
  let inputMiddle = [];
  let inputFirst = [];

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
        out = `${bEnere[Number(input[0])]} ${h} ${and} ${uEnere[Number(input[2])]}`;
      } else if (input[1] == 1) {
        out = `${bEnere[Number(input[0])]} ${h} ${and} ${teens[Number(input[2])]}`;
      } else if (input[1] > 1 && input[2] == 0) {
        out = `${bEnere[Number(input[0])]} ${h} ${and} ${tiere[Number(input[1])]}`;
      } else if (input[1] > 1 && input[2] != 0) {
        out = `${bEnere[Number(input[0])]} ${h} ${and} ${tiere[Number(input[1])]} ${
          uEnere[Number(input[2])]
        }`;
      }
      break;

    case 4:
      inputLast = [hundrer, tier, ener];
      inputFirst = [tusener];
      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTo = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${and} ${tiere[inputLast[1]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[1] == 0 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[1] == 1) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }
      outEn = `${bEnere[Number(inputFirst[0])]} ${t}`;
      out = `${outEn} ${outTo}`;
      break;

    case 5:
      inputLast = [hundrer, tier, ener];
      inputFirst = [tiTusener, tusener];
      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTo = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${and} ${tiere[inputLast[1]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[1] == 0 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[1] == 1) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }
      if (inputFirst[1] == 0) {
        outEn = tiere[Number(inputFirst[0])];
      } else if (inputFirst[0] == 1) {
        outEn = `${teens[Number(inputFirst[1])]}`;
      } else {
        outEn = `${tiere[Number(inputFirst[0])]} ${uEnere[Number(inputFirst[1])]}`;
      }
      out = `${outEn} ${t} ${outTo}`;
      break;

    case 6:
      inputLast = [hundrer, tier, ener];
      inputFirst = [hundreTusener, tiTusener, tusener];
      if (inputFirst[1] == 0 && inputFirst[2] == 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h}`;
      } else if (inputFirst[1] == 0 && inputFirst[2] != 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${
          uEnere[Number(inputFirst[2])]
        }`;
      } else if (inputFirst[1] == 1) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${teens[Number(inputFirst[2])]}`;
      } else if (inputFirst[1] > 1 && inputFirst[2] == 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${tiere[Number(inputFirst[1])]}`;
      } else if (inputFirst[1] > 1 && inputFirst[2] != 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${
          tiere[Number(inputFirst[1])]
        } ${uEnere[Number(inputFirst[2])]}`;
      }
      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTo = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${and} ${tiere[inputLast[1]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 1) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTo = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }
      out = `${outEn} ${t} ${outTo}`;
      break;

    case 7:
      inputLast = [hundrer, tier, ener];
      inputMiddle = [hundreTusener, tiTusener, tusener];
      inputFirst = [millioner];

      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTre = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 1) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }

      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] == 1) {
        outTo = `${teens[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${tiere[inputMiddle[1]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${tiere[inputMiddle[1]]} ${uEnere[inputMiddle[2]]}`;
      } else if (inputLast[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h}`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          uEnere[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 1) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          teens[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        } ${uEnere[Number(inputMiddle[2])]}`;
      }

      outEn = uEnere[Number(inputFirst[0])];

      if (Number(millioner) == 1) {
        m = mEn;
      } else if (Number(millioner) > 1) {
        m = mFlere;
      } else {
        m = "";
      }
      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        out = `${outEn} ${m} ${outTre}`;
      } else {
        out = `${outEn} ${m} ${outTo} ${t} ${outTre}`;
      }
      break;

    case 8:
      inputLast = [hundrer, tier, ener];
      inputMiddle = [hundreTusener, tiTusener, tusener];
      inputFirst = [tiMillioner, millioner];
      m = mFlere;

      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTre = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 1) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }

      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] == 1) {
        outTo = `${teens[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${tiere[inputMiddle[1]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${tiere[inputMiddle[1]]} ${uEnere[inputMiddle[2]]}`;
      } else if (inputLast[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h}`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          uEnere[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 1) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          teens[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        } ${uEnere[Number(inputMiddle[2])]}`;
      }

      if (inputFirst[1] == 0) {
        outEn = tiere[Number(inputFirst[0])];
      } else if (input[0] == 1) {
        outEn = `${teens[Number(inputFirst[1])]}`;
      } else {
        outEn = `${tiere[Number(inputFirst[0])]} ${uEnere[Number(inputFirst[1])]}`;
      }

      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        out = `${outEn} ${m} ${outTre}`;
      } else {
        out = `${outEn} ${m} ${outTo} ${t} ${outTre}`;
      }

      break;

    case 9:
      inputLast = [hundrer, tier, ener];
      inputMiddle = [hundreTusener, tiTusener, tusener];
      inputFirst = [hundreMillioner, tiMillioner, millioner];
      m = mFlere;

      if (inputLast[0] == 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${and} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] == 1) {
        outTre = `${and} ${teens[inputLast[2]]}`;
      } else if (inputLast[0] == 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${and} ${tiere[inputLast[1]]} ${uEnere[inputLast[2]]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 0 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${uEnere[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] == 1) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${teens[Number(inputLast[2])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] == 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]}`;
      } else if (inputLast[0] > 0 && inputLast[1] > 1 && inputLast[2] != 0) {
        outTre = `${bEnere[Number(inputLast[0])]} ${h} ${and} ${tiere[Number(inputLast[1])]} ${
          uEnere[Number(inputLast[2])]
        }`;
      }

      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] == 1) {
        outTo = `${teens[inputMiddle[2]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${tiere[inputMiddle[1]]}`;
      } else if (inputMiddle[0] == 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${tiere[inputMiddle[1]]} ${uEnere[inputMiddle[2]]}`;
      } else if (inputLast[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h}`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 0 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          uEnere[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] == 1) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          teens[Number(inputMiddle[2])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] == 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        }`;
      } else if (inputMiddle[0] > 0 && inputMiddle[1] > 1 && inputMiddle[2] != 0) {
        outTo = `${bEnere[Number(inputMiddle[0])]} ${h} ${and} ${
          tiere[Number(inputMiddle[1])]
        } ${uEnere[Number(inputMiddle[2])]}`;
      }

      if (inputFirst[1] == 0 && inputFirst[2] == 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h}`;
      } else if (inputFirst[1] == 0 && inputFirst[2] != 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${
          uEnere[Number(inputFirst[2])]
        }`;
      } else if (inputFirst[1] == 1) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${teens[Number(inputFirst[2])]}`;
      } else if (inputFirst[1] > 1 && inputFirst[2] == 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${tiere[Number(inputFirst[1])]}`;
      } else if (inputFirst[1] > 1 && inputFirst[2] != 0) {
        outEn = `${bEnere[Number(inputFirst[0])]} ${h} ${and} ${
          tiere[Number(inputFirst[1])]
        } ${uEnere[Number(inputFirst[2])]}`;
      }

      if (inputMiddle[0] == 0 && inputMiddle[1] == 0 && inputMiddle[2] == 0) {
        out = `${outEn} ${m} ${outTre}`;
      } else {
        out = `${outEn} ${m} ${outTo} ${t} ${outTre}`;
      }
      break;

    case 10:
      if (Number(input) == 1000000000) {
        out = "ONE BILLION";
      } else {
        out = err;
      }
      break;

    default:
      out = err;
  }

  if (Number(input) < 0) {
    out = err;
  }
  if (input[0] == "0") {
    out = nullFirst;
  }
  document.getElementById("ans").innerText = `${out}`;
};

// LAGE SIRKLER MED TALL INNI (DIV'ER) FOR ALLE PRIMTALL MELLOM 2 OG ET GITT INPUT-TALL

// const drawPrimes = (input = document.getElementById("num-two").value) => {
//
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
