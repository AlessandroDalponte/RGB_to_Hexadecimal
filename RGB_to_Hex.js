"use  strict";

let hexNumber; // This is the variable that stores the final hexadecimal number;

// This object contains the equivalent values, from decimal numbers to hexadecimal numbers;
const decToHexRel = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "A",
  11: "B",
  12: "C",
  13: "D",
  14: "E",
  15: "F",
};

// - This function receives a decimal number and converts it to hexadecimal;
// - The argument is a string, so the function turns it into a number and truncates it;
// - The function only allows arguments within the range >= 0 && <= 255,
// so if it is > 255 it will become 255, and if it is < 0 it will become = 0;
// - The returned value is an array containing two elements, the first one is the converted number
// (to hexadecimal), and the second one is the number to be placed in the input boxes of the user's interface,
// keeping the input values withing the correct range of 0 to 255;
function toHex(color) {
  color = Math.trunc(Number(color));
  const hex = [];
  if (color <= 0) {
    hex.push("00");
    hex.push(0);
  } else if (color > 0 && color <= 255) {
    hex.push(decToHexRel[Math.trunc(color / 16)] + decToHexRel[color % 16]);
    hex.push(color);
  } else if (color > 255) {
    hex.push("FF");
    hex.push(255);
  }
  return hex;
}

// - This event listener listens to click events on the 'convert' button;
// - It takes the value in each input color box and uses them as arguments, one at a time, when calling the function 'toHex()';
// - It outputs to the screen the hexadecimal number which represents the RGB color;
document.querySelector(".convertButton").addEventListener("click", function () {
  let rgbColor;
  hexNumber = "#";
  for (let i = 0; i < document.querySelectorAll(".numberBox").length; i++) {
    rgbColor = document.querySelectorAll(".numberBox")[i].value;
    hexNumber = hexNumber + toHex(rgbColor)[0];
    document.querySelectorAll(".numberBox")[i].value = toHex(rgbColor)[1];
  }
  document.querySelector(
    ".hexadecimalNumber"
  ).textContent = `Hexadecimal: ${hexNumber}`;
  document.querySelector(".showColor").style.backgroundColor = hexNumber;
});
