document.getElementById("btn").addEventListener("click", function(){

    let grade = document.getElementById("grades");
    let obtainedMarks = document.getElementById("Obtainedmarks").value;
    let totalMarks = document.getElementById("totalmarks").value;
    let percentage = (obtainedMarks/totalMarks) * 100;
    percentage = percentage.toFixed(1);

    document.getElementById("percentage").innerHTML = percentage + "%";

    if(percentage >=90){
        grade.innerHTML = "A+"
    } else if(percentage >=80){
        grade.innerHTML = "A"
    } else if(percentage >=70){
        grade.innerHTML = "B"
    } else if(percentage >=60){
        grade.innerHTML = "C"
    } else if(percentage >=45){
        grade.innerHTML = "D"
    } else {
        grade.innerHTML = "F"
    }

    
})