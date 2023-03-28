function selectAnswer(answer) {
    // Remove the 'selected' class from all answers
    var answers = document.getElementsByClassName("answer");
    for (var i = 0; i < answers.length; i++) {
        answers[i].classList.remove("selected");
    }

    // Add the 'selected' class to the clicked answer
    answer.classList.add("selected");
}
function nextPage() {
    // getting question number
    var questionNumber = document.getElementById("quiz-num").innerText;
    // getting string behind / in question number 1/10
    var num = questionNumber.split("/")[0];
    // going to next question
    window.location.href = (parseInt(num) + 1) + ".html";

}