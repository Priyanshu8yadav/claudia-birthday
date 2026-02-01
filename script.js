window.addEventListener("load", () => {
  const bgMusic = document.getElementById("bgMusic");
  const voiceNote = document.getElementById("voiceNote");

  bgMusic.volume = 0.3;

  // Called from Enter button
  window.enterSite = function () {
    document.querySelector(".intro").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
    bgMusic.play().catch(() => {});
  };

  // Mute background when voice plays
  voiceNote.addEventListener("play", () => {
    bgMusic.volume = 0;
  });

  // Restore background when voice stops
  voiceNote.addEventListener("pause", () => {
    bgMusic.volume = 0.3;
  });

  voiceNote.addEventListener("ended", () => {
    bgMusic.volume = 0.3;
  });
});



