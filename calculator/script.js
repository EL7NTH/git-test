let currentInput = "";
let operation = null;
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(op) {
  if (currentInput === "") return;
  if (operation !== null) calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = "";
}

function calculate() {
  if (operation === null || currentInput === "") return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current === 0 ? "Error" : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operation = null;
  previousInput = "";
  updateDisplay();
}

function clearResult() {
  currentInput = "";
  previousInput = "";
  operation = null;
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function updateDisplay() {
  const resultField = document.getElementById("result");
  resultField.value = currentInput || "0";
}
