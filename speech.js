var count = 180;
const counter = document.querySelector(".speech");
var playButton = document.querySelector('#play');
playButton.addEventListener("click", () => {
  setInterval(() => {
    if (count > 0) {
      counter.innerHTML = count--;
      if ('speechSynthesis' in window) with (speechSynthesis) {
        utterance = new SpeechSynthesisUtterance(counter.textContent);
        utterance.voice = getVoices()[1];
        utterance.rate = 4;
        speak(utterance);
      }
    }
  }, 2000);
});