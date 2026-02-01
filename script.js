window.addEventListener("load", () => {
  const bgMusic = document.getElementById("bgMusic");
  const voiceNote = document.getElementById("voiceNote");
  const enterBtn = document.getElementById("enterBtn");
  const content = document.getElementById("content");
  const intro = document.querySelector(".intro");

  bgMusic.volume = 0.3;

  // ENTER button click
  enterBtn.addEventListener("click", () => {
    intro.style.display = "none";
    content.classList.remove("hidden");
    bgMusic.play().catch(() => {});
  });

  // When voice plays → mute background
  voiceNote.addEventListener("play", () => {
    bgMusic.volume = 0;
  });

  // When voice pauses or ends → restore background
  voiceNote.addEventListener("pause", () => {
    bgMusic.volume = 0.3;
  });

  voiceNote.addEventListener("ended", () => {
    bgMusic.volume = 0.3;
  });
});

