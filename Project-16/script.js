let alarmTrigger = false;
let audio = new Audio("assets/sound.wav");

document.getElementById("btn").addEventListener("click", function () {
  let alarmTime = document.getElementById("input").value;
  let [alarmHours, alarmMinutes] = alarmTime.split(":");
  let hours;
  let minutes;
  let seconds;

  setInterval(() => {
    let currentTime = new Date();
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    if (alarmHours === hours && alarmMinutes === minutes) {
      audio.play();
      alarmTrigger = true;
    }
  }, 1000);
});

