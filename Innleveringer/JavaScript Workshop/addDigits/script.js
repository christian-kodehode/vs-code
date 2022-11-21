/*
 */

const addDigits = (input = document.getElementById("num-in").value) => {
  let ans = 0;
  for (i = 0; i < input.length; i++) {
    ans += Number(input[i]);
  }
  document.getElementById("ans").innerText = `${ans}`;
};
