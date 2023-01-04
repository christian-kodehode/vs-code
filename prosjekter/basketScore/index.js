let homeCounterTag = document.getElementById("homeCounter");
let guestCounterTag = document.getElementById("guestCounter");

let homeCounter = 0;
let guestCounter = 0;

homeCounterTag.innerText = homeCounter;
guestCounterTag.innerText = guestCounter;
homeCounterTag.style.border = "0.5rem solid white";
guestCounterTag.style.border = "0.5rem solid white  ";

function scoreChecker() {
  if (homeCounter > guestCounter) {
    homeCounterTag.style.border = "0.5rem solid darkgreen";
    guestCounterTag.style.border = "0.5rem solid darkred";
  } else if (homeCounter < guestCounter) {
    homeCounterTag.style.border = "0.5rem solid darkred";
    guestCounterTag.style.border = "0.5rem solid darkgreen";
  } else {
    homeCounterTag.style.border = "0.5rem solid white";
    guestCounterTag.style.border = "0.5rem solid white  ";
  }
}

function homeAdd1() {
  homeCounter++;
  if (homeCounter > 9) {
    homeCounterTag.innerText = homeCounter;
  } else {
    homeCounterTag.innerText = "0" + homeCounter.toString();
  }
  scoreChecker();
}

function homeAdd2() {
  homeCounter += 2;
  if (homeCounter > 9) {
    homeCounterTag.innerText = homeCounter;
  } else {
    homeCounterTag.innerText = "0" + homeCounter.toString();
  }
  scoreChecker();
}

function homeAdd3() {
  homeCounter += 3;
  if (homeCounter > 9) {
    homeCounterTag.innerText = homeCounter;
  } else {
    homeCounterTag.innerText = "0" + homeCounter.toString();
  }
  scoreChecker();
}

function homeReset() {
  homeCounter = 0;
  homeCounterTag.innerText = homeCounter;
  scoreChecker();
}

function guestAdd1() {
  guestCounter++;
  if (guestCounter > 9) {
    guestCounterTag.innerText = guestCounter;
  } else {
    guestCounterTag.innerText = "0" + guestCounter.toString();
  }
  scoreChecker();
}

function guestAdd2() {
  guestCounter += 2;
  if (guestCounter > 9) {
    guestCounterTag.innerText = guestCounter;
  } else {
    guestCounterTag.innerText = "0" + guestCounter.toString();
  }
  scoreChecker();
}

function guestAdd3() {
  guestCounter += 3;
  if (guestCounter > 9) {
    guestCounterTag.innerText = guestCounter;
  } else {
    guestCounterTag.innerText = "0" + guestCounter.toString();
  }
  scoreChecker();
}

function guestReset() {
  guestCounter = 0;
  guestCounterTag.innerText = guestCounter;
  scoreChecker();
}
