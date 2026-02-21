document.getElementById("convertBtn").addEventListener("click", function () {
  let tempretureSelect = document.getElementById("Tempretureselect");
  let valueSelected = tempretureSelect.value;
  let userValue = document.getElementById("userVal").value;
  let convertedTemp = null;

  if (userValue === "" || isNaN(userValue)) {
    Toastify({
      text: "Invalid Input",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #b00000, #c9813d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else if (valueSelected === "celsiusToFahrenheit") {
    let calculatedVal = (userValue * 9) / 5 + 32;
    convertedTemp = calculatedVal.toFixed(2);
    document.getElementById("result").innerText = convertedTemp + " °F";
  } else if (valueSelected === "farhenheitToCelsius") {
    let calculatedVal = ((userValue - 32) * 5 / 9) ;
    convertedTemp = calculatedVal.toFixed(2);
    document.getElementById("result").innerText = convertedTemp + " °C";
  }
});
