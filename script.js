// document.write(document.querySelector(".message"));
// document.write(document.querySelector(".message").textContent);
// document.write((document.querySelector(".guess").value = 20));
// document.querySelector(".message").textContent = "😊 Right ";
// document.querySelector(".guess").value = 20;

// document.querySelector(".message").textContent = "😊 Right ";
// document.querySelector(".check").addEventListener("click", function () {
// });
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😒 No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Right Guess";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "darkgreen";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High !!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = 0;
      document.querySelector(".message").textContent = "Game Over !!";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low !!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "Game Over !!";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".message").textContent = "Start Gussing";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = " #011e03e8";
});
