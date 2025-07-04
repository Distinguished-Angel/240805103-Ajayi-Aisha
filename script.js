const display = document.getElementById("display");

function updateDisplay(value) {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function appendNumber(num) {
  updateDisplay(num);
}

function appendOperator(op) {
  display.innerText += op;
}

function appendSqrt() {
  if (display.innerText === "0") {
    display.innerText = "√";
  } else {
    display.innerText += "√";
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function deleteLast() {
  if (display.innerText.length === 1 || display.innerText === "Error") {
    display.innerText = "0";
  } else {
    display.innerText = display.innerText.slice(0, -1);
  }
}

function calculate() {
  try {
    let expression = display.innerText.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)');
    display.innerText = eval(expression);
  } catch {
    display.innerText = "Error";
  }
}

// ✅ Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key)) appendNumber(key);
  else if (key === "+" || key === "-" || key === "*" || key === "/" || key === ".") appendOperator(key);
  else if (key === "Enter") calculate();
  else if (key === "Backspace") deleteLast();
  else if (key === "Escape") clearDisplay();
});
