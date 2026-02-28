document.getElementById("btn").addEventListener("click", function(){
    let userVal = document.getElementById("input").value;
    let newVal = userVal.split('').reverse().join('');
    let output = document.getElementById("ouput")

    if(userVal === newVal){
        output.innerHTML = userVal + " is Palindrome"
    }
    else{
        output.innerHTML = userVal + " is NOT Palindrome";
    }
})