//elements
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const speakBtn = document.querySelector("#speak");

//speech recoginiton setup
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

//speech recoginition start
recognition.onstart = function () {
  console.log("vr active");
};

//speech recoginition stop
recognition.onend = function () {
  console.log("vr deactive");
};

//sr continous
recognition.continuous = true;

startBtn.addEventListener("click", () => {
  recognition.start();
});
stopBtn.addEventListener("click", () => {
  recognition.stop();
});

//Jarvis speech
function readOut(message) {
  const speech = new SpeechSynthesisUtterance();
  //different voices
  const allVoices = speechSynthesis.getVoices();
  speech.text = message;
  speech.voice = allVoices[7];
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
  console.log("speaking out");
}

//example

speakBtn.addEventListener("click", () => {
  readOut("hello, how can i help you");
});

window.onload = function () {
  readOut("   ");
};
