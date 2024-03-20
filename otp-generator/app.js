const btnCode = document.getElementById("btn-code");
const showCode = document.getElementById("show-code");
const inputs = document.querySelectorAll("input");
const checkCodeBtn = document.getElementById("check-code");

btnCode.addEventListener("click", generateCode);

checkCodeBtn.addEventListener("click", verifyCode);

function generateCode() {
  const codeLength = 6;
  // Array.from crea un nuevo array en base a un objeto iterable
  const code = Array.from({ length: codeLength }, () =>
    Math.floor(Math.random() * 10)
  ).join(" ");
  showCode.innerText = code;
}

function inputValues() {
  // expresion regular para que solo se validen los numeros del 0 al 9
  const regex = /[^0-9]/g;

  // se obtiene el value de cada input
  inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      const inputValue = input.value.replace(regex, "");
      if (inputValue && index < inputs.length - 1) {
        inputs[index + 1].focus();
      }
    });
  });
}

function verifyCode() {
  const userInput = Array.from(inputs, (input) => input.value).join(" ");
  const code = showCode.innerText;

  if (userInput === code) {
    document.body.style.backgroundColor = "green";
    checkCodeBtn.innerText = "accepted code";
  } else {
    document.body.style.backgroundColor = "red";
    checkCodeBtn.innerText = "denied code";
  }
}

inputValues();
