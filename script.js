const bgMusic = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const intro = document.querySelector(".intro");
const voiceNote = document.getElementById("voiceNote");

bgMusic.volume = 0.25;

enterBtn.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
  intro.style.display = "none";
  content.classList.remove("hidden");
});

voiceNote.addEventListener("play", () => {
  bgMusic.pause();
});

voiceNote.addEventListener("ended", () => {
  bgMusic.play().catch(() => {});
});

