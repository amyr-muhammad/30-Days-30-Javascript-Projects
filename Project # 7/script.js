let createdVal = "";
let userIdVal = "";

let users = [];

document.getElementById("register").onclick = function () {
  let nameVal = document.getElementById("userName").value;
  let emailVal = document.getElementById("userEmail").value;
  let passwordVal = document.getElementById("password").value;
  createdVal = new Date();
  userIdVal = Math.floor(Math.random() * 9999) + 1;
  let user;
  
  if (nameVal !== "" && emailVal !== "" && passwordVal !== "")
     user = {
    id: userIdVal,
    fullname: nameVal,
    email: emailVal,
    password: passwordVal,
    status: "active",
    createdAt: createdVal,
  };

  users.push(user);
    Toastify({
      text: "User Registered",
      duration: 3000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      close: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

  console.log(user);
};

document.getElementById("login").onclick = function () {
  let nameVal = document.getElementById("userName").value;
  let emailVal = document.getElementById("userEmail").value;
  let passwordVal = document.getElementById("password").value;
  console.log(nameVal)

  let isUserFound = false;
  for (let user of users) {
    if (
      user.fullname === nameVal &&
      user.email === emailVal &&
      user.password === passwordVal
    ) {
      isUserFound = true;
      Toastify({
        text: "Logged In",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }

    if(!isUserFound){
        Toastify({
        text: "User not Registered",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #b00000, #c9653d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
    console.log(user);
  }


  document.getElementById("printuser").onclick = function(){
    console.log(users);
  }
};
