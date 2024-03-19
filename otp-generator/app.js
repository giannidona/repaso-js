const btnCode = document.getElementById("btn-code");
const showCode = document.getElementById("show-code");

const inputs = document.querySelectorAll("input");
const checkCodeBtn = document.getElementById("check-code");

const checkCode = [];
const fullCode = [];

btnCode.addEventListener("click", () => {
  for (let i = 1; i < 7; i++) {
    let code = Math.floor(Math.random() * 9);
    fullCode.push(code.toString());
  }

  let textCode = fullCode.join(" ");
  showCode.innerText = textCode;
});

function inputValues() {
  const regex = /[^0-9]/g;

  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      const inputValue = input.value.replace(regex);
      if (inputValue && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
      checkCodeFunction(inputValue);
    });
  });
}

function checkCodeFunction(value) {
  checkCodeBtn.addEventListener("click", () => {
    checkCode.push(value);
    if (arraysAreEqual(checkCode, fullCode)) {
      console.log("pasa");
    } else {
      console.log("el code no coincide");
    }
  });
}

function arraysAreEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

inputValues();
