document.getElementById("btn").addEventListener("click", function () {
  let characters = "0123456789ABCDEF";
  let codeOne = "#";
  let codeTwo = "#";

  for (let i = 0; i < 6; i++) {
    codeOne += characters.charAt(Math.floor(Math.random() * 16));
  }
  for (let i = 0; i < 6; i++) {
    codeTwo += characters.charAt(Math.floor(Math.random() * 16));
  }

  let gradient = document.getElementById("random-color");
  gradient.style.backgroundImage = `linear-gradient(to left, ${codeOne}, ${codeTwo})`;

  document.getElementById("hexacode1").innerHTML = codeOne;
  document.getElementById("hexacode2").innerHTML = codeTwo;
});
