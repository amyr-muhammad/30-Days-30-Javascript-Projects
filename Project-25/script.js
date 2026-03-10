document.getElementById("btn").addEventListener("click", function(){
    let userVal = document.getElementById("num").value;
    userVal = Number(userVal);
    let output = document.getElementById("output");
    let factorial = 1;

    for(let i = 1; i <= userVal; i++){
        factorial = i*factorial;
    }

    output.innerHTML = factorial;
})