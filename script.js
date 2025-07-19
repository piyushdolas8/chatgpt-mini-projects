const quotes = [
  "Believe you can and you're halfway there.",
  "The only way to do great work is to love what you do.",
  "Start where you are. Use what you have. Do what you can.",
  "Success is not in what you have, but who you are.",
  "Dream big and dare to fail."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}
