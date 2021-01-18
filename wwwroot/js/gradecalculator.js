//create grade variable when user clicks the calculate grade button
var grade = document.getElementById("submitButton");

//add an event listener that executes this function
grade.addEventListener("click", function () {
    //get all the grade variables the user inputs for each category
    var assignmentGrade = document.getElementById("assignment").value;
    var groupProjectGrade = document.getElementById("groupProject").value;
    var quizGrade = document.getElementById("quiz").value;
    var examGrade = document.getElementById("exam").value;
    var intexGrade = document.getElementById("intex").value;
    var finalGrade = (parseFloat(assignmentGrade) + parseFloat(groupProjectGrade) + parseFloat(quizGrade) + parseFloat(examGrade) + parseFloat(intexGrade));
    var letterGrade = " ";

    //calculate the letter grade based off the user's final grade
    if (finalGrade >= 94) {
        letterGrade = "A";
    }
    else if (finalGrade >= 90) {
        letterGrade = "A-";
    }
    else if (finalGrade >= 87) {
        letterGrade = "B+";
    }
    else if (finalGrade >= 84) {
        letterGrade = "B";
    }
    else if (finalGrade >= 80) {
        letterGrade = "B-";
    }
    else if (finalGrade >= 77) {
        letterGrade = "C+";
    }
    else if (finalGrade >= 74) {
        letterGrade = "C";
    }
    else if (finalGrade >= 70) {
        letterGrade = "C-";
    }
    else if (finalGrade >= 67) {
        letterGrade = "D+";
    }
    else if (finalGrade >= 64) {
        letterGrade = "D";
    }
    else if (finalGrade >= 60) {
        letterGrade = "D-";
    }
    else {
        letterGrade = "E";
    }

    //message with user's final grade percentage and letter grade
    alert("Your final grade is " + finalGrade + "% which is an " + letterGrade);
});