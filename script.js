function enterSite() {
  document.querySelector('.intro').style.display = 'none';
  document.getElementById('content').classList.remove('hidden');
  document.getElementById('bgMusic').play();
}

function playVoice() {
  document.getElementById('voiceNote').play();
}