const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

document.getElementById("start").addEventListener("click", function () {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 50);
    isRunning = true;
  }
});

document.getElementById("stop").addEventListener("click", function () {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
   startTime = 0;
   elapsedTime = 0;
   isRunning = false;

  display.textContent = "00:00:00:00";
});

function update() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let milliSeconds = Math.floor((elapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliSeconds = String(milliSeconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}
