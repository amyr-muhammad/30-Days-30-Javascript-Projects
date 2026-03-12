document.getElementById("btn").addEventListener("click", function () {
  let userVal = document.getElementById("num").value;
  let output = document.getElementById("output");
  userVal = Number(userVal);

  if (isNaN(userVal) || userVal == "") {
    alert("Enter a number Please");
  } else {
    for (let i = 1; i <= 10; i++) {
      let results = userVal * i;
      output.innerHTML += userVal + " X " + i + " = " + results + "<br />";
    }
  }
});
