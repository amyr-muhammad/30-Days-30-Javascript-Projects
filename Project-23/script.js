document.getElementById("btn").addEventListener("click", function(){
    let obtainedMarks = document.getElementById("Obtainedmarks").value;
    let totalMarks = document.getElementById("totalmarks").value;
    let percentage = (obtainedMarks / totalMarks) * 100;

    document.getElementById("output").innerHTML = percentage + "%";
})