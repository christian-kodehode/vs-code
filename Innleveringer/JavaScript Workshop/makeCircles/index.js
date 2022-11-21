const inputNum = document.querySelector("#inputNum");
const circleContainer = document.querySelector("#circleContainer");
const makeCircles = () => {
  while (circleContainer.firstChild) {
    circleContainer.removeChild(circleContainer.firstChild);
  }
  if (inputNum.value && inputNum.value < 1000) {
    for (let i = 0; i < inputNum.value; i++) {
      let circle = document.createElement("div");
      circle.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      circle.classList.add("circle");
      circle.textContent = i + 1;
      circleContainer.appendChild(circle);
    }
  } else {
    window.alert("Vennligst skriv inn et tall mellom 1 og 1000 😎");
  }
};
