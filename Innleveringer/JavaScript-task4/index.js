// js code

const numToText = (input = document.getElementById("num-in").value) => {
  const inputArray = input.split("");
  let out = "";
  const h = "HUNDRE";
  const t = "TUSEN";
  const m = "EN MILLION";
  const err = "INPUT MÅ VÆRE ET HELTALL MELLOM 1 OG 1 MILLION.";
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
      document.getElementById("test").innerText = input[1];
      if (input[1] == 0) {
        out = tiere[Number(input[0])];
      } else if (input[0] == 1) {
        out = `${teens[Number(input[1])]}`;
      } else {
        out = `${tiere[Number(input[0])]}-${uEnere[Number(input[1])]}`;
      }
  }
  document.getElementById("ans").innerText = out;
};
