document.getElementById("btn").addEventListener("click", function () {
  let codeCombination = "0123456789ABCDEF";
  let code = "#";

  for (let i=0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random()*16);
    code += codeCombination.charAt(randomIndex);
  }

  document.getElementById("random-color").style.backgroundColor = code;
  document.getElementById("hexacode").innerHTML = code
  console.log(code);
});
