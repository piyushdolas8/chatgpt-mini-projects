const quoteEl = document.getElementById("quote");
const inputEl = document.getElementById("input");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");
const accuracyEl = document.getElementById("accuracy");
const restartBtn = document.getElementById("restart");
const successSound = document.getElementById("successSound");

let quote = "";
let startTime;
let timerInterval;

const quotes = [
  "Success is not final, failure is not fatal.",
  "Believe in yourself and all that you are.",
  "Do something today that your future self will thank you for.",
  "Dream big. Start small. Act now.",
  "Typing fast is a superpower in the digital age."
];

function newQuote() {
  quote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteEl.textContent = quote;
  inputEl.value = "";
  resultEl.textContent = "";
  accuracyEl.textContent = "🎯 Accuracy: --%";
  clearInterval(timerInterval);
  timerEl.textContent = "0.00";
  startTime = null;
}

function startTimer() {
  startTime = new Date();
  timerInterval = setInterval(() => {
    const elapsed = (new Date() - startTime) / 1000;
    timerEl.textContent = elapsed.toFixed(2);
  }, 100);
}

inputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") e.preventDefault();
});

inputEl.addEventListener("input", () => {
  if (!startTime) startTimer();

  const typedText = inputEl.value;
  const trimmedQuote = quote.trim();

  if (typedText === trimmedQuote) {
    clearInterval(timerInterval);
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const wordCount = trimmedQuote.split(" ").length;
    const wpm = Math.round((wordCount / timeTaken) * 60);
    resultEl.textContent = `🎉 You typed in ${timeTaken.toFixed(2)}s ⌛ | Speed: ${wpm} WPM 🚀`;
    successSound.play();

    // Accuracy Calculation
    const correctChars = [...typedText].filter((char, i) => char === trimmedQuote[i]).length;
    const accuracy = ((correctChars / trimmedQuote.length) * 100).toFixed(2);
    accuracyEl.textContent = `🎯 Accuracy: ${accuracy}%`;
  }
});

restartBtn.addEventListener("click", newQuote);

// Load first quote
newQuote();

