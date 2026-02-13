const display = document.getElementById("display");
const twentyFive = document.getElementById("twentyFive");
const five = document.getElementById("five");

let focusDuration = 25 * 60;
let breakDuration = 5 * 60;

let timeLeft = focusDuration;
let timer = null;
let isRunning = false;
let isBreak = false; 

document.getElementById("start").addEventListener("click", function () {
  if (isRunning) return;

  isBreak = false;
  timeLeft = focusDuration;

  twentyFive.style.display = "inline";
  five.style.display = "none";

  startTimer();
});

document.getElementById("takeBreak").addEventListener("click", function () {
  if (isRunning) return;

  isBreak = true;
  timeLeft = breakDuration;

  twentyFive.style.display = "none";
  five.style.display = "inline";

  startTimer();
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
  isRunning = false;

  timeLeft = isBreak ? breakDuration : focusDuration;

  twentyFive.style.display = isBreak ? "none" : "inline";
  five.style.display = isBreak ? "inline" : "none";

  updateDisplay();
});

function startTimer() {
  isRunning = true;

  timer = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      alert("Finished");
    }
  }, 1000);
}

function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  if (isBreak) {
    five.textContent = `${minutes}:${seconds}`;
  } else {
    twentyFive.textContent = `${minutes}:${seconds}`;
  }
}

updateDisplay();
