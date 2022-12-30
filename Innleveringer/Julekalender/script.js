// JULEKALENDER PROSJEKT - CHRISTIAN OG DAVID

const counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const insertPic = (picURL, lukeID) => {
  lukeID.innerText = "";
  lukeID.style.width = "48%";
  lukeID.style.height = "250px";
  lukeID.style.backgroundImage = picURL;
  lukeID.style.backgroundSize = "100%";
  lukeID.style.backgroundRepeat = "no-repeat";
  lukeID.style.backgroundPosition = "center";
};

const backToNormal = (lukeID) => {
  lukeID.style.backgroundImage = "";
  lukeID.style.fontSize = "40px";
  lukeID.style.fontWeight = "700";
  lukeID.style.padding = "0";
  lukeID.style.alignItems = "center";
  lukeID.style.justifyContent = "center";
  lukeID.style.width = "18%";
  lukeID.style.height = "60px";
};

const expandOne = () => {
  counters[0]++;
  const luke = document.getElementById("en");
  if (counters[0] % 2 == 1) {
    insertPic("url(./pics/christmas_dog.png)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "1";
  }
};

const expandTwo = () => {
  counters[1]++;
  const luke = document.getElementById("to");
  if (counters[1] % 2 == 1) {
    luke.style.width = "48%";
    luke.style.height = "250px";
    luke.style.alignItems = "flex-start";
    luke.style.fontSize = "1.25em";
    luke.style.padding = "0 15px";
    luke.style.fontWeight = "400";
    luke.innerText = `En liten jente klatret opp på nissens fang. Julenissen spurte det vanlige: «Hva vil du ha til jul?» 
    Den lille jenta stirret på ham med åpen munn og forferdet et øyeblikk, og gispet: «Fikk du ikke e-posten min?»`;
  } else {
    backToNormal(luke);
    luke.innerText = "2";
  }
};
// "url(./pics/santa.jpg)";
const expandThree = () => {
  counters[2]++;
  const luke = document.getElementById("tre");
  if (counters[2] % 2 == 1) {
    insertPic("url(./pics/santa.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "3";
  }
};

const expandFour = () => {
  counters[3]++;
  const luke = document.getElementById("fire");
  if (counters[3] % 2 == 1) {
    insertPic("url(./pics/snowman.png)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "4";
  }
};

const expandFive = () => {
  counters[4]++;
  const luke = document.getElementById("fem");
  if (counters[4] % 2 == 1) {
    insertPic("url(./pics/snowglobe.png)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "5";
  }
};

const expandSix = () => {
  counters[5]++;
  const luke = document.getElementById("seks");
  if (counters[5] % 2 == 1) {
    insertPic("url(./pics/biscuits.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "6";
  }
};

const expandSeven = () => {
  counters[6]++;
  const luke = document.getElementById("syv");
  if (counters[6] % 2 == 1) {
    insertPic("url(./pics/tree.png)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "7";
  }
};

const expandEight = () => {
  counters[7]++;
  const luke = document.getElementById("åtte");
  if (counters[7] % 2 == 1) {
    insertPic("url(./pics/presents.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "8";
  }
};

const expandNine = () => {
  counters[8]++;
  const luke = document.getElementById("ni");
  if (counters[8] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "9";
  }
};

const expandTen = () => {
  counters[9]++;
  const luke = document.getElementById("ti");
  if (counters[9] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "10";
  }
};

const expandEleven = () => {
  counters[10]++;
  const luke = document.getElementById("elleve");
  if (counters[10] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "11";
  }
};

const expandTwelve = () => {
  counters[11]++;
  const luke = document.getElementById("tolv");
  if (counters[11] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "12";
  }
};

const expandThirteen = () => {
  counters[12]++;
  const luke = document.getElementById("tretten");
  if (counters[12] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "13";
  }
};

const expandFourteen = () => {
  counters[13]++;
  const luke = document.getElementById("fjorten");
  if (counters[13] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "14";
  }
};

const expandFifteen = () => {
  counters[14]++;
  const luke = document.getElementById("femten");
  if (counters[14] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "15";
  }
};

const expandSixteen = () => {
  counters[15]++;
  const luke = document.getElementById("seksten");
  if (counters[15] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "16";
  }
};

const expandSeventeen = () => {
  counters[16]++;
  const luke = document.getElementById("sytten");
  if (counters[16] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "17";
  }
};

const expandEighteen = () => {
  counters[17]++;
  const luke = document.getElementById("atten");
  if (counters[17] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "18";
  }
};

const expandNineteen = () => {
  counters[18]++;
  const luke = document.getElementById("nitten");
  if (counters[18] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "19";
  }
};

const expandTwenty = () => {
  counters[19]++;
  const luke = document.getElementById("tjue");
  if (counters[19] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "20";
  }
};

const expandTwentyone = () => {
  counters[20]++;
  const luke = document.getElementById("tjueen");
  if (counters[20] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "21";
  }
};

const expandTwentytwo = () => {
  counters[21]++;
  const luke = document.getElementById("tjueto");
  if (counters[21] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "22";
  }
};

const expandTwentythree = () => {
  counters[22]++;
  const luke = document.getElementById("tjuetre");
  if (counters[22] % 2 == 1) {
    insertPic("url(./pics/placeholderpic.jpg)", luke);
  } else {
    backToNormal(luke);
    luke.innerText = "23";
  }
};

const expandChristmas = () => {
  counters[23]++;
  const lukeChristmas = document.getElementById("julaften");
  if (counters[23] % 2 == 1) {
    lukeChristmas.innerText = "GOD JUL!";
    lukeChristmas.style.width = "48%";
    lukeChristmas.style.height = "250px";
    lukeChristmas.style.fontSize = "100px";
    lukeChristmas.style.alignItems = "center";
    lukeChristmas.style.justifyContent = "center";
  } else {
    lukeChristmas.innerText = "24";
    lukeChristmas.style.fontSize = "40px";
    lukeChristmas.style.width = "38%";
    lukeChristmas.style.height = "60px";
    lukeChristmas.style.alignItems = "center";
    lukeChristmas.style.justifyContent = "center";
  }
};

const allFuncs = [
  expandOne,
  expandTwo,
  expandThree,
  expandFour,
  expandFive,
  expandSix,
  expandSeven,
  expandEight,
  expandNine,
  expandTen,
  expandEleven,
  expandTwelve,
  expandThirteen,
  expandFourteen,
  expandFifteen,
  expandSixteen,
  expandSeventeen,
  expandEighteen,
  expandNineteen,
  expandTwenty,
  expandTwentyone,
  expandTwentytwo,
  expandTwentythree,
  expandChristmas,
];

const apne = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 0;
  }
  for (let j = 0; j < allFuncs.length; j++) {
    allFuncs[j]();
  }
};

const lukke = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 1;
  }
  for (let j = 0; j < allFuncs.length; j++) {
    allFuncs[j]();
  }
};

/*

----- ET FORSØK PÅ FØRST Å LAGE LUKENE MED JAVASCRIPT -----

const cal = document.querySelector("div");
console.log(cal);
cal.style.padding = "1%";
document.body.style.backgroundColor = "#105e0e";

const lukeContainer = [];

for (i = 0; i < 24; i++) {
  let div = document.createElement("div");
  div.classList.add(`luke`);
  div.classList.add(`${i}`);
  div.style.background = "#5b1d61";
  div.style.margin = "1%";
  if (i > 22) {
    div.style.width = "38%";
  } else {
    div.style.width = "18%";
  }
  const txt = `${i + 1}`;
  div.style.color = "snow";
  div.style.fontSize = "50px";
  div.innerText = txt;
  div.style.textAlign = "center";
  div.style.fontFamily = "Mountains of Christmas";
  div.style.border = "1px solid snow";
  div.style.borderRadius = "5px";
  cal.append(div);
  lukeContainer[i] = div;
}
*/
