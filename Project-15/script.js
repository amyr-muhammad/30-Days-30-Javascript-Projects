document.getElementById("btn").addEventListener("click", function () {
  let dob = document.getElementById("input").value;
  if (!dob) {
    alert("Enter DOB");
    return;
  }

  let currentTime = new Date();
  let dobTime = new Date(dob);

  let age = currentTime - dobTime;
  let ageInDays = Math.floor(age / (1000 * 60 * 60 * 24));
  let ageInYears = Math.floor(ageInDays / 365);

  let daysPassed = ageInDays - ageInYears * 365;
  let daysLeft = 365 - daysPassed;

  document.getElementById("output").innerHTML =
    daysLeft + " Days Left In Your Next Birthday";
});
