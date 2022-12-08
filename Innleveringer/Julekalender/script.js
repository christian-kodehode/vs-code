// JULEKALENDER PROSJEKT - CHRISTIAN OG DAVID

const counters = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/*
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
*/

const expandOne = () => {
  counters[0]++;
  const lukeOne = document.getElementById("en");
  if (counters[0] % 2 == 1) {
    lukeOne.style.width = "58%";
    lukeOne.style.height = "250px";
    lukeOne.innerText = "";
    lukeOne.style.backgroundImage =
      "url(https://images.unsplash.com/photo-1608096299230-81c7b43d5dfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hyaXN0bWFzJTIwc21hbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)";
    lukeOne.style.backgroundSize = "100%";
    lukeOne.style.backgroundRepeat = "no-repeat";
    lukeOne.style.backgroundPosition = "center";
    lukeOne.style.background;
    lukeOne.style.lukeOne.appendChild(img);
  } else {
    lukeOne.style.backgroundImage = "";
    lukeOne.style.width = "18%";
    lukeOne.style.height = "60px";
    lukeOne.innerText = "1";
  }
};

const expandTwo = () => {
  counters[1]++;
  const lukeTwo = document.getElementById("to");
  if (counters[1] % 2 == 1) {
    lukeTwo.style.width = "38%";
    lukeTwo.style.alignItems = "flex-start";
  } else {
    lukeTwo.style.width = "18%";
    lukeTwo.style.height = "60px";
  }
};

const expandThree = () => {
  counters[2]++;
  const lukeThree = document.getElementById("tre");
  if (counters[2] % 2 == 1) {
    lukeThree.style.width = "38%";
    lukeThree.style.alignItems = "flex-start";
  } else {
    lukeThree.style.width = "18%";
    lukeThree.style.height = "60px";
  }
};

const expandFour = () => {
  counters[3]++;
  const lukeFour = document.getElementById("fire");
  if (counters[3] % 2 == 1) {
    lukeFour.style.width = "38%";
    lukeFour.style.alignItems = "flex-start";
  } else {
    lukeFour.style.width = "18%";
    lukeFour.style.height = "60px";
  }
};

const expandFive = () => {
  counters[4]++;
  const lukeFive = document.getElementById("fem");
  if (counters[4] % 2 == 1) {
    lukeFive.style.width = "38%";
    lukeFive.style.alignItems = "flex-start";
  } else {
    lukeFive.style.width = "18%";
    lukeFive.style.height = "60px";
  }
};

const expandSix = () => {
  counters[5]++;
  const lukeSix = document.getElementById("seks");
  if (counters[5] % 2 == 1) {
    lukeSix.style.width = "38%";
    lukeSix.style.alignItems = "flex-start";
  } else {
    lukeSix.style.width = "18%";
    lukeSix.style.height = "60px";
  }
};

const expandSeven = () => {
  counters[6]++;
  const lukeSeven = document.getElementById("syv");
  if (counters[6] % 2 == 1) {
    lukeSeven.style.width = "38%";
    lukeSeven.style.alignItems = "flex-start";
  } else {
    lukeSeven.style.width = "18%";
    lukeSeven.style.height = "60px";
  }
};

const expandEight = () => {
  counters[7]++;
  const lukeEight = document.getElementById("åtte");
  if (counters[7] % 2 == 1) {
    lukeEight.style.width = "38%";
    lukeEight.style.alignItems = "flex-start";
  } else {
    lukeEight.style.width = "18%";
    lukeEight.style.height = "60px";
  }
};

const expandNine = () => {
  counters[8]++;
  const lukeNine = document.getElementById("ni");
  if (counters[8] % 2 == 1) {
    lukeNine.style.width = "38%";
    lukeNine.style.alignItems = "flex-start";
  } else {
    lukeNine.style.width = "18%";
    lukeNine.style.height = "60px";
  }
};

const expandTen = () => {
  counters[9]++;
  const lukeTen = document.getElementById("ti");
  if (counters[9] % 2 == 1) {
    lukeTen.style.width = "38%";
    lukeTen.style.alignItems = "flex-start";
  } else {
    lukeTen.style.width = "18%";
    lukeTen.style.height = "60px";
  }
};

const expandEleven = () => {
  counters[10]++;
  const lukeEleven = document.getElementById("elleve");
  if (counters[10] % 2 == 1) {
    lukeEleven.style.width = "38%";
    lukeEleven.style.alignItems = "flex-start";
  } else {
    lukeEleven.style.width = "18%";
    lukeEleven.style.height = "60px";
  }
};

const expandTwelve = () => {
  counters[11]++;
  const lukeTwelve = document.getElementById("tolv");
  if (counters[11] % 2 == 1) {
    lukeTwelve.style.width = "38%";
    lukeTwelve.style.alignItems = "flex-start";
  } else {
    lukeTwelve.style.width = "18%";
    lukeTwelve.style.height = "60px";
  }
};

const expandThirteen = () => {
  counters[12]++;
  const lukeThirteen = document.getElementById("tretten");
  if (counters[12] % 2 == 1) {
    lukeThirteen.style.width = "38%";
    lukeThirteen.style.alignItems = "flex-start";
  } else {
    lukeThirteen.style.width = "18%";
    lukeThirteen.style.height = "60px";
  }
};

const expandFourteen = () => {
  counters[13]++;
  const lukeFourteen = document.getElementById("fjorten");
  if (counters[13] % 2 == 1) {
    lukeFourteen.style.width = "38%";
    lukeFourteen.style.alignItems = "flex-start";
  } else {
    lukeFourteen.style.width = "18%";
    lukeFourteen.style.height = "60px";
  }
};

const expandFifteen = () => {
  counters[14]++;
  const lukeFifteen = document.getElementById("femten");
  if (counters[14] % 2 == 1) {
    lukeFifteen.style.width = "38%";
    lukeFifteen.style.alignItems = "flex-start";
  } else {
    lukeFifteen.style.width = "18%";
    lukeFifteen.style.height = "60px";
  }
};

const expandSixteen = () => {
  counters[15]++;
  const lukeSixteen = document.getElementById("seksten");
  if (counters[15] % 2 == 1) {
    lukeSixteen.style.width = "38%";
    lukeSixteen.style.alignItems = "flex-start";
  } else {
    lukeSixteen.style.width = "18%";
    lukeSixteen.style.height = "60px";
  }
};

const expandSeventeen = () => {
  counters[16]++;
  const lukeSeventeen = document.getElementById("sytten");
  if (counters[16] % 2 == 1) {
    lukeSeventeen.style.width = "38%";
    lukeSeventeen.style.alignItems = "flex-start";
  } else {
    lukeSeventeen.style.width = "18%";
    lukeSeventeen.style.height = "60px";
  }
};

const expandEighteen = () => {
  counters[17]++;
  const lukeEighteen = document.getElementById("atten");
  if (counters[17] % 2 == 1) {
    lukeEighteen.style.width = "38%";
    lukeEighteen.style.alignItems = "flex-start";
  } else {
    lukeEighteen.style.width = "18%";
    lukeEighteen.style.height = "60px";
  }
};

const expandNineteen = () => {
  counters[18]++;
  const lukeNineteen = document.getElementById("nitten");
  if (counters[18] % 2 == 1) {
    lukeNineteen.style.width = "38%";
    lukeNineteen.style.alignItems = "flex-start";
  } else {
    lukeNineteen.style.width = "18%";
    lukeNineteen.style.height = "60px";
  }
};

const expandTwenty = () => {
  counters[19]++;
  const lukeTwenty = document.getElementById("tjue");
  if (counters[19] % 2 == 1) {
    lukeTwenty.style.width = "38%";
    lukeTwenty.style.alignItems = "flex-start";
  } else {
    lukeTwenty.style.width = "18%";
    lukeTwenty.style.height = "60px";
  }
};

const expandTwentyone = () => {
  counters[20]++;
  const lukeTwentyone = document.getElementById("tjueen");
  if (counters[20] % 2 == 1) {
    lukeTwentyone.style.width = "38%";
    lukeTwentyone.style.alignItems = "flex-start";
  } else {
    lukeTwentyone.style.width = "18%";
    lukeTwentyone.style.height = "60px";
  }
};

const expandTwentytwo = () => {
  counters[21]++;
  const lukeTwentytwo = document.getElementById("tjueto");
  if (counters[21] % 2 == 1) {
    lukeTwentytwo.style.width = "38%";
    lukeTwentytwo.style.alignItems = "flex-start";
  } else {
    lukeTwentytwo.style.width = "18%";
    lukeTwentytwo.style.height = "60px";
  }
};

const expandTwentyThree = () => {
  counters[22]++;
  const lukeTwentythree = document.getElementById("tjuetre");
  if (counters[22] % 2 == 1) {
    lukeTwentythree.style.width = "38%";
    lukeTwentythree.style.alignItems = "flex-start";
  } else {
    lukeTwentythree.style.width = "18%";
    lukeTwentythree.style.height = "60px";
  }
};

const expandChristmas = () => {
  counters[23]++;
  const lukeChristmas = document.getElementById("julaften");
  if (counters[23] % 2 == 1) {
    lukeChristmas.style.width = "38%";
    lukeChristmas.style.alignItems = "flex-start";
  } else {
    lukeChristmas.style.width = "38%";
    lukeChristmas.style.height = "60px";
  }
};

const apne = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 0;
  }
  expandOne();
  expandTwo();
  expandThree();
  expandFour();
  expandFive();
  expandSix();
  expandSeven();
  expandEight();
  expandNine();
  expandTen();
  expandEleven();
  expandTwelve();
  expandThirteen();
  expandFourteen();
  expandFifteen();
  expandSixteen();
  expandSeventeen();
  expandEighteen();
  expandNineteen();
  expandTwenty();
  expandTwentyone();
  expandTwentytwo();
  expandTwentythree();
  expandChristmas();
};

const lukke = () => {
  for (let i = 0; i < counters.length; i++) {
    counters[i] = 1;
  }
  console.log(counters);
  expandOne();
  expandTwo();
  expandThree();
  expandFour();
  expandFive();
  expandSix();
  expandSeven();
  expandEight();
  expandNine();
  expandTen();
  expandEleven();
  expandTwelve();
  expandThirteen();
  expandFourteen();
  expandFifteen();
  expandSixteen();
  expandSeventeen();
  expandEighteen();
  expandNineteen();
  expandTwenty();
  expandTwentyone();
  expandTwentytwo();
  expandTwentythree();
  expandChristmas();
};

/*
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
