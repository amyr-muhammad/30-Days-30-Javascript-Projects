document.getElementById("rollbtn").addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  let diceFace = document.getElementById("diceface")

  function getDiceFace(randomNumber){

    switch (randomNumber) {
    case 1:
      return "&#9856;";
    case 2:
        return "&#9857;";
    case 3:
        return "&#9858;";
    case 4:
        return "&#9859;";
    case 5:
        return "&#9860;";
    case 6:
        return "&#9861;";
    default:
        return "";

   }
  }

  diceFace.innerHTML = getDiceFace(randomNumber);
  
});
