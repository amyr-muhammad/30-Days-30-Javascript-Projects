document.getElementById("convertBtn").addEventListener("click", function () {
  let weightSelect = document.getElementById("weightselect");
  let valueSelected = weightSelect.value;

  userValue = document.getElementById("userVal").value;
  let convertedWeight = null;

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
  } else if (valueSelected === "KGToPounds") {
    let calculatedVal = userValue * 2.20462;
    convertedWeight = calculatedVal.toFixed(2);
  } else if (valueSelected === "PoundsToKG") {
    let calculatedVal = userValue / 2.20462;
    convertedWeight = calculatedVal.toFixed(2);
  }

  document.getElementById("result").innerText = convertedWeight;
});
