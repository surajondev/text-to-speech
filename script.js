    const speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";

    let voices = []; 

    window.speechSynthesis.onvoiceschanged = () => {
      voices = window.speechSynthesis.getVoices();
    
      speech.voice = voices[0];
    
      let voiceSelect = document.querySelector("#voices");
      voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
    };

    
    document.querySelector("#voices").addEventListener("change", () => {
      speech.voice = voices[document.querySelector("#voices").value];
    });

    function textToAudio() {
      const msg = document.getElementById("input-text").value;
      const volume = (document.getElementById('volumeRange').value)/10
      const rate = (document.getElementById('rateRange').value)/10
      const pitch = (document.getElementById('pitchRange').value)/10

      speech.text = msg;
      speech.volume = volume;
      speech.rate = rate;
      speech.pitch = pitch;

      window.speechSynthesis.speak(speech);
    }

	function reset() {
      document.getElementById('volumeRange').value = 5;
      document.getElementById('rateRange').value = 5;
      document.getElementById('pitchRange').value = 10;
	}

  var menuButton = document.getElementById("menu-icon");
  menuButton.addEventListener('click', evt => {
    var menuMobile = document.getElementById("menu-mobile");
    menuMobile.classList.toggle("show");
  })