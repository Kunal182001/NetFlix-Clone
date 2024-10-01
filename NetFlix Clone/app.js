// Function to hide all answers
function hideAllAnswers() {
    document.querySelectorAll('.answer1, .answer2, .answer3, .answer4, .answer5, .answer6').forEach(ans => {
        ans.style.display = "none";
    });
}

// Toggle visibility of answers
function toggleAnswers(button, answersClass) {
    let answers = document.querySelectorAll(answersClass);
    
    // Check if the answers are currently visible
    let isVisible = answers[0].style.display === "block";
    
    // Hide all answers first
    hideAllAnswers();
    
    // If answers are not visible, show them; otherwise, keep them hidden
    if (!isVisible) {
        answers.forEach((ans) => {
            ans.style.display = "block";
        });
    }
}

// For q1 button
let q1btn = document.querySelector(".q1");
q1btn.addEventListener("click", () => {
    toggleAnswers(q1btn, ".answer1");
});

// For q2 button
let q2btn = document.querySelector(".q2");
q2btn.addEventListener("click", () => {
    toggleAnswers(q2btn, ".answer2");
});

// For q3 button
let q3btn = document.querySelector(".q3");
q3btn.addEventListener("click", () => {
    toggleAnswers(q3btn, ".answer3");
});

// For q4 button
let q4btn = document.querySelector(".q4");
q4btn.addEventListener("click", () => {
    toggleAnswers(q4btn, ".answer4");
});

// For q5 button
let q5btn = document.querySelector(".q5");
q5btn.addEventListener("click", () => {
    toggleAnswers(q5btn, ".answer5");
});

// For q6 button
let q6btn = document.querySelector(".q6");
q6btn.addEventListener("click", () => {
    toggleAnswers(q6btn, ".answer6");
});
