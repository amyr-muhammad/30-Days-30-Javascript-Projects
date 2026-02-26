let results = 0;
let count = 0;

function questionGenerate() {
  let numberX = Math.floor(Math.random() * 10) + 1;
  let numberY = Math.floor(Math.random() * 10) + 1;
  results = numberX * numberY;
  console.log(results);

  document.getElementById("number1").innerHTML = numberX;
  document.getElementById("number2").innerHTML = numberY;
}

questionGenerate();

document.getElementById("checkAnwerbtn").addEventListener("click", function () {
  let userInput = document.getElementById("input").value;
  userInput = Number(userInput);

  if (userInput === results) {
    ++count;
  } else {
    --count;
  }

  document.getElementById("score").innerHTML = count;
  questionGenerate();
});
