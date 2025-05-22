// Write JavaScript here
let expression = '';
let resultDisplayed = false;

function appendNumber(number) {
  if (resultDisplayed) {
    expression = '';
    resultDisplayed = false;
    document.getElementById('result').textContent = '0';
  }
  expression += number;
  document.getElementById('expression').textContent = expression;
}

function appendOperator(operator) {
  if (resultDisplayed) {
    resultDisplayed = false;
  }
  expression += operator;
  document.getElementById('expression').textContent = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('expression').textContent = '';
  document.getElementById('result').textContent = '0';
}

function calculate() {
  try {
    const result = math.evaluate(expression);
    document.getElementById('result').textContent = +result.toFixed(10);
    resultDisplayed = true;
  } catch (e) {
    document.getElementById('result').textContent = 'Error';
  }
}
function backspace() {
  if (resultDisplayed) {
    expression = '';
    resultDisplayed = false;
    document.getElementById('result').textContent = '0';
    document.getElementById('expression').textContent = '';
  } else {
    expression = expression.slice(0, -1); // Remove last character
    document.getElementById('expression').textContent = expression;
  }
}

