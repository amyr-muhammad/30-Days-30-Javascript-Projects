document
  .getElementById("generatePasswordBtn")
  .addEventListener("click", function () {
    let passwordLength = document.getElementById("inputVal").value;

    if (passwordLength === "" || isNaN(passwordLength)) {
      Toastify({
        text: "Enter a number for Password",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #0740dd, #587dce)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else if (passwordLength > 32 || passwordLength == 0) {
      Toastify({
        text: "Lengths between 1-32 Accepted",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #dd0707, #ce7d58)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    } else {
        Toastify({
        text: "Password Is generated",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #07dd07, #58ce68)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }

    if (passwordLength <= 32 && passwordLength !== 0) {
      let capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let smallLetters = "abcdefghijklmnopqrstuvwxyz";
      let passNumbers = "0123456789";
      let passSymbols = "!@#$%&*?";

      let allCharacters =
        capitalLetters + smallLetters + passNumbers + passSymbols;
      let password = "";

      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * allCharacters.length) + 1;
        password += allCharacters.charAt(randomIndex);
      }

      document.getElementById("generatedpassword").innerHTML = password;
    }
  });

let passwordText = document.getElementById("generatedpassword");

document.getElementById("copyBtn").addEventListener("click", function () {
  navigator.clipboard.writeText(passwordText.innerHTML);


  if (passwordText.innerHTML === "Your Password") {
    Toastify({
      text: "Generate A password first",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #0740dd, #587dce)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  } else {
    Toastify({
      text: "Copied to Clipoard",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #05b640, #04be0d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();
  }
});
