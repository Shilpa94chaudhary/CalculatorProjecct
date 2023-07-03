var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var resetBtn = document.getElementById("resetBtn");

var operand1 = 0;
var operand2 = null;
var operator = null;
var decimalAdded = false;

function resetCalculator() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].removeEventListener("click", buttonClickHandler);
  }
  display.textContent = "";
  operand1 = 0;
  operand2 = null;
  operator = null;
  decimalAdded = false;
  setTimeout(function () {
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", buttonClickHandler);
    }
  });
}

resetBtn.addEventListener("click", resetCalculator);

// Function to evalute the operations
function buttonClickHandler() {
  var value = this.getAttribute("data-value");
  switch (value) {
    case "+":
      operator = "+";
      operand1 = parseFloat(display.textContent);
      display.textContent = "";
      decimalAdded = false; // Reset the decimalAdded flag
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

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", buttonClickHandler);
}
