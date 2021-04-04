let voices = []; // global array

window.speechSynthesis.onvoiceschanged = () => {
  // Get List of Voices
  voices = window.speechSynthesis.getVoices();

  // Initially set the First Voice in the Array.
  speech.voice = voices[0];

  // Set the Voice Select List. (Set the Index as the value, which we'll use later when the user updates the Voice using the Select Menu.)
  let voiceSelect = document.querySelector("#voices");
  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

function textToAudio(){
    const msg = document.getElementById("input-text").value;
    const volume = (document.getElementById('volumeRange').value)/10
    const rate = (document.getElementById('rateRange').value)/10
    const pitch = (document.getElementById('pitchRange').value)/10

    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    speech.text = msg;
    speech.volume = volume;
    speech.rate = rate;
    speech.pitch = pitch;

    console.log(volume);
    console.log(rate);
    console.log(pitch);

    window.speechSynthesis.speak(speech);
} 

