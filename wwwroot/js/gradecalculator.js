$("#submitButton").click( function () {
    //get all the grade variables the user inputs for each category
    var assignmentGrade = $("#assignment").val();
    var groupProjectGrade = $("#groupProject").val();
    var quizGrade = $("#quiz").val();
    var examGrade = $("#exam").val();
    var intexGrade = $("#intex").val();
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

    if ((assignmentGrade <= 100) && (groupProjectGrade <= 100) && (quizGrade <= 100) &&
            (examGrade <= 100) && (intexGrade <= 100) && (assignmentGrade >= 0) &&
            (groupProjectGrade >= 0) && (quizGrade >= 0) && (examGrade >= 0) && (intexGrade >= 0)) {
        //message with user's final grade percentage and letter grade if each field is in a valid range
        alert("Your final grade is " + finalGrade + "% which is an " + letterGrade);
    }
    else {
        //otherwise prompt user to enter valid inputs
        alert("Enter in a valid field (between 0-100) to calculate your grade");
    }
});