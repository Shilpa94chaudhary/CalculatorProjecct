// All buttons of the calculator
var buttons = document.getElementsByClassName("button");

// Display area
var display = document.getElementById("display");

// Reset button
var resetBtn = document.getElementById("resetBtn");

var operand1 = 0;
var operand2 = null;
var operator = null;
var decimalAdded = false;

function resetCalculator() {
  display.textContent = "";
  operand1 = 0;
  operand2 = null;
  operator = null;
  decimalAdded = false;
}

// Call to resetCalculator() function when user click on reset button
resetBtn.addEventListener("click", resetCalculator);

// Function to evalute the operations
function buttonClickHandler() {
  var value = this.getAttribute("data-value");
  switch (value) {
    case "+":
      operator = "+";
      // parseFloat() function parses a string argument and returns a
      // floating point number
      operand1 = parseFloat(display.textContent);
      // Reset the display
      display.textContent = "";
      // Reset the decimalAdded flag
      decimalAdded = false;
      break;
    case "-":
      operator = "-";
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
      decimalAdded = false;
      break;
    case "*":
      operator = "*";
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
      decimalAdded = false;
      break;
    case "/":
      operator = "/";
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
      decimalAdded = false;
      break;
    case "%":
      operator = "%";
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
      decimalAdded = false;
      break;
    case "=":
      operand2 = parseFloat(display.textContent);
      var result;
      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        case "%":
          result = operand1 % operand2;
          break;
      }
      display.textContent = result;
      decimalAdded = false;
      break;
    case ".":
      if (!decimalAdded) {
        display.textContent += value;
        decimalAdded = true;
      } else {
        display.innerText += value;
      }
      break;
    default:
      display.textContent += value;
      break;
  }
}

// Function to evaluate or save operand1 and operator values given by user
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClickHandler);
}
