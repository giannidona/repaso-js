const inputRed = document.getElementById("input-red");
const inputGreen = document.getElementById("input-green");
const inputBlue = document.getElementById("input-blue");
const colorRgbCode = document.getElementById("color-rgb-code");
const btnCopy = document.getElementById("btn-copy");

function getColors() {
  let colors;
  let redValue = 0;
  let greenValue = 0;
  let blueValue = 0;

  inputRed.addEventListener("input", () => {
    redValue = inputRed.value;
    colors = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorRgbCode.innerText = colors;
    document.body.style.backgroundColor = colors;
  });
  inputGreen.addEventListener("input", () => {
    greenValue = inputGreen.value;
    colors = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorRgbCode.innerText = colors;
    document.body.style.backgroundColor = colors;
  });
  inputBlue.addEventListener("input", () => {
    blueValue = inputBlue.value;
    colors = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    colorRgbCode.innerText = colors;
    document.body.style.backgroundColor = colors;
  });

  btnCopy.addEventListener("click", () => {
    navigator.clipboard.writeText(colors);
    btnCopy.innerText = "copied!";
    setTimeout(() => {
      btnCopy.innerText = "copy color code";
    }, 1000);
  });
}

getColors();
