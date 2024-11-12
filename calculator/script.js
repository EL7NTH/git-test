let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') calculate();
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
  updateDisplay();
}

function calculate() {
  let result;
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }
  
  currentOperand = result;
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').value = currentOperand || previousOperand || '0';
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
  updateDisplay();
}