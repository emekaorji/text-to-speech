var count = 180;
const counter = document.querySelector(".speech");
var playButton = document.querySelector('#play');
playButton.addEventListener("click", () => {
  setInterval(() => {
    if (count > -1) {
      counter.innerHTML = count--;
      if ('speechSynthesis' in window) with (speechSynthesis) {
        utterance = new SpeechSynthesisUtterance(counter.textContent);
        utterance.voice = getVoices()[1];
        utterance.rate = 2.8;
        if (count > 100) {
          utterance.rate = 3.5;
        }
        speak(utterance);
      }
    }
  }, 1500);
});