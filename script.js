let countdownInterval;
let currentTime = 0;

document.getElementById("startBtn").addEventListener("click", startCountdown);
document.getElementById("resetBtn").addEventListener("click", resetCountdown);

function startCountdown() {
  const input = document.getElementById("timeInput").value;
  currentTime = parseInt(input);

  if (isNaN(currentTime) || currentTime <= 0) {
    document.getElementById("timeDisplay").textContent = "Lütfen geçerli bir süre girin.";
    return;
  }

  clearInterval(countdownInterval);
  document.getElementById("timeDisplay").textContent = `${currentTime} saniye kaldı`;

  countdownInterval = setInterval(() => {
    currentTime--;
    if (currentTime <= 0) {
      clearInterval(countdownInterval);
      document.getElementById("timeDisplay").textContent = "Süre doldu!";
    } else {
      document.getElementById("timeDisplay").textContent = `${currentTime} saniye kaldı`;
    }
  }, 1000);
}

function resetCountdown() {
  clearInterval(countdownInterval);
  currentTime = 0;
  document.getElementById("timeDisplay").textContent = "";
  document.getElementById("timeInput").value = "";
}
