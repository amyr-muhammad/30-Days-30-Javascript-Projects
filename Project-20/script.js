document.getElementById("btn").addEventListener("click", function () {
  let condition = document.getElementById("condition");
  let bmiValue = document.getElementById("bmi");

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let bmi = weight / (height * height);
  bmi = Number(bmi).toFixed(2);
  

  if (bmi < 18.5) {
    condition.innerHTML = " under Weight!";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    condition.innerHTML = " Healthy!";
  } else if (bmi > 25 && bmi < 29.9) {
    condition.innerHTML = " Over Weight!";
  } else {
    condition.innerHTML = " Obesity!!!";
  }

  bmiValue.innerHTML = bmi;
});
