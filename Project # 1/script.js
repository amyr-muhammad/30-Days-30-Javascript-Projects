let count = 0;

document.getElementById("increament").addEventListener("click", function () {
     ++count;
    document.getElementById("output").innerHTML = count;
    

});

document.getElementById("decreament").addEventListener("click", function () {
    --count;
    document.getElementById("output").innerHTML = count;
    

});


document.getElementById("reset").addEventListener("click", function () {
    count = 0;
    document.getElementById("output").innerHTML = count;
    

});




