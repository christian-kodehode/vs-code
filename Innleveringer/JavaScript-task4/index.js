// js code
/*
const enterKey = (event) => {
  if (event.keyCode == "Enter") {
    numToText();
  }
};
*/

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

  document.getElementById("ans").innerText = `${out}`;
};
