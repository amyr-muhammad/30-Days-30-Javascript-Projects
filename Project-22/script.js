let randomNum = 0;
let score = 0;

function randomNumber() {

  let hint = document.getElementById("hint");
  randomNum = Math.floor(Math.random() * 10) + 1;
  console.log(randomNum)

  if (randomNum >= 1 && randomNum <= 5) {
    hint.innerHTML = "Number is Between 1 to 5";
  } else {
    hint.innerHTML = "Number is Between 6 to 10";
  }

}

randomNumber();

document.getElementById("btn").addEventListener("click", function () {
    
  let output = document.getElementById("output");

  let value = document.getElementById("number").value;
  value = Number(value);

  if (value === randomNum) {
    ++score;
  } else {
    --score;
  }

  output.innerHTML = score;
  randomNumber();
});
