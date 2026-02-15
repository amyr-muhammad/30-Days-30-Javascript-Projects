let calculateAge = document.getElementById("calculate");
let yearsAge = document.getElementById("years");
let monthAge = document.getElementById("months")
let weeksAge = document.getElementById("weeks");
let daysAge = document.getElementById("days");

calculateAge.addEventListener("click", function () {
  let dateOfBirth = document.getElementById("dateofbirth").value;

  if (!dateOfBirth) {
    Toastify({
      text: "Enter Age First",
      duration: 2000,
      destination: "https://github.com/apvarun/toastify-js",
      newWindow: true,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "linear-gradient(to right, #b00000, #c9703d)",
      },
      onClick: function () {}, // Callback after click
    }).showToast();

    return;
  } else {
    let dateNow = new Date().getTime();
    let dobInMs = new Date(dateOfBirth).getTime();
    let ageOfPerson = dateNow - dobInMs;

    let ageInYears = Math.floor(ageOfPerson / (1000 * 60 * 60 * 24 * 365));
    let ageInMonths = Math.floor(ageInYears * 12);
    let ageInWeeks = Math.floor(ageInYears * 52.1429);
    let ageInDays = Math.floor(ageInYears * 365);

    yearsAge.innerText = ageInYears;
    monthAge.innerText = ageInMonths;
    weeksAge.innerText = ageInWeeks;
    daysAge.innerHTML = ageInDays;
    
  }
});
