const bgMusic = document.getElementById("bgMusic");
const enterBtn = document.getElementById("enterBtn");
const content = document.getElementById("content");
const intro = document.querySelector(".intro");

enterBtn.addEventListener("click", () => {
  bgMusic.play().catch(() => {});
  intro.style.display = "none";
  content.classList.remove("hidden");
});
