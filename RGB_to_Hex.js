"use  strict";

let hexNumber = ["FF", "FF", "FF"]; // This is the variable that stores each part of the hexadecimal number;
const inputColors = document.querySelectorAll(".numberBox"); // This variable is the path for selecting the class "numberBox";

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

// - This function receives a decimal number (in string type) and converts it to hexadecimal;
// - The function converts numbers within the range >= 0 && <= 255, adjusting any out of range arguments if necessary;
// - The returned value is an array containing two elements, the first one is the converted number
// (to hexadecimal), and the second one is the number that will appear in the input boxes in the user's interface,
// to keep the input values withing the correct range of 0 to 255;
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

// - This event listener listens to input values in each color box, and uses it as arguments to the function 'toHex()';
// - It outputs to the screen the hexadecimal number which represents the RGB color and the color itself;
for (let i = 0; i < inputColors.length; i++) {
  inputColors[i].addEventListener("input", function () {
    let rgbColor;

    rgbColor = inputColors[i].value;
    hexNumber[i] = toHex(rgbColor)[0];
    inputColors[i].value = toHex(rgbColor)[1];

    let finalHexNumber = "#"; // This variable stores (as a string) the final Hexadecimal number that appears on the screen;
    for (let j = 0; j < inputColors.length; j++) {
      finalHexNumber += hexNumber[j];
    }

    document.querySelector(
      ".hexadecimalNumber"
    ).textContent = `Hexadecimal: ${finalHexNumber}`;

    document.querySelector(".showColor").style.backgroundColor = finalHexNumber;
  });
}
