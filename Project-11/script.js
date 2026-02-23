document.getElementById("maskbtn").addEventListener("click", function () {
  let userVal = document.getElementById("input").value;
  let firstLetter = userVal.charAt(0);
  let indexAt = userVal.indexOf("@");
  let domainName = userVal.slice(indexAt);
  let username = userVal.slice(1, indexAt);
  let lengthOfUserName = username.length;
  let stars = "*".repeat(lengthOfUserName);
  let maskedEmail = firstLetter + stars + domainName;

  document.getElementById("output").innerText = maskedEmail;

  console.log(maskedEmail);
});
