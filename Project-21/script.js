document.getElementById("btn").addEventListener("click", function(){
    let output = document.getElementById("output")
    let value = document.getElementById("number").value;
    value = Math.round(Number(value));

    if(value % 2 !== 0 ){
        output.innerHTML =  "Number is ODD "
    }else{
        output.innerHTML = "Number is Even"
    }
})