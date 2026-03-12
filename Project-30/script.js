const buttons = document.querySelectorAll("button");
const screen = document.getElementById("screen");
const operators = ["+", "-", "*", "/"];
let resultDisplayed = false;
let errorDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const value = button.innerText;
    const lastChar = screen.innerText.slice(-1);

    if (value === "C") {
      screen.innerText = "";
      resultDisplayed = false;
      errorDisplayed = false;
      return;
    }

    if (value === "=") {
      if (operators.includes(lastChar) || screen.innerText === "") {
        screen.innerText = "Error";
        errorDisplayed = true;
      } else {
        try {
          screen.innerText = eval(screen.innerText);
          resultDisplayed = true;
          errorDisplayed = false;
        } catch {
          screen.innerText = "Error";
          errorDisplayed = true;
        }
      }
      return;
    }

    if (!isNaN(value) && errorDisplayed) {
      screen.innerText = value;
      errorDisplayed = false;
      resultDisplayed = false;
      return;
    }

    if (!isNaN(value) && resultDisplayed) {
      if (operators.includes(screen.innerText.slice(-1))) {
        screen.innerText += value;
      } else {
        screen.innerText = value;
      }
      resultDisplayed = false;
      return;
    }

    if (operators.includes(value) && operators.includes(lastChar)) {
      screen.innerText = "Error";
      errorDisplayed = true;
      resultDisplayed = false;
      return;
    }

    if (operators.includes(value) && screen.innerText === "") {
      screen.innerText = "Error";
      errorDisplayed = true;
      return;
    }

    screen.innerText += value;
  });
});
