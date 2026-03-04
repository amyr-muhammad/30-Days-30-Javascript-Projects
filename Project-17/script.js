document.getElementById("btn").addEventListener("click", function(){

    let billAmount = document.getElementById("bill").value;
    let tipPercentage = document.getElementById("tip-percentage").value;
    
    billAmount = Number(billAmount);
    tipPercentage = Number(tipPercentage);

    let tipAmount = billAmount * (tipPercentage / 100);
    let totalAmount = billAmount + tipAmount;

    document.getElementById("Tipoutput").innerHTML = tipAmount;
    document.getElementById("output").innerHTML = totalAmount;
})