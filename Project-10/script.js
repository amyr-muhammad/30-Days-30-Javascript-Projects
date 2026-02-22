document.getElementById("textarea").oninput = function () {

  let maxLength = 50;
  let currentLength = this.value.length;

  document.getElementById("totalchar").innerText = currentLength;

  document.getElementById("remainingchar").innerText =
    maxLength - currentLength;
};
