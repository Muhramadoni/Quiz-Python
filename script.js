function calculateScore() {
  const correctAnswers = {
    q1: "a",
    q2: "a",
    q3: "c",
    q4: "a",
    q5: "c",
    q6: "a",
    q7: "a",
    q8: "a",
    q9: "a",
    q10: "a",
    q11: "a",
    q12: "a",
    q13: "a",
    q14: "a",
    q15: "a",
    q16: "b",
    q17: "b",
    q18: "a",
    q19: "b",
    q20: "a",
    q21: "a",
    q22: "a",
    q23: "b",
    q24: "b",
    q25: "b",
  };

  let totalQuestions = 25;
  let score = 0;
  let incorrect = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const question = `q${i}`;
    const selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
    if (selectedAnswer) {
      if (selectedAnswer.value === correctAnswers[question]) {
        score++;
      } else {
        incorrect++;
      }
    } else {
      incorrect++;
    }
  }

  const percentage = (score / totalQuestions) * 100;

  // Simpan nilai dengan nama yang konsisten
  localStorage.setItem("correctCount", score);
  localStorage.setItem("incorrectCount", incorrect);
  localStorage.setItem("percentage", percentage.toFixed(2));

  window.location.href = "hasil.html";
}
