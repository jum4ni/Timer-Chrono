// code.js
console.log('Starting...');

const updateTime = () => {
    const timeElement = document.getElementById("timeDisplay");
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    console.log('updateTime called');
};

// Haetaan HTML-elementit muuttujiin
const timerElement = document.getElementById("timerDisplay");
const startStopButton = document.getElementById("startStopButton");
const Stopped = document.getElementById("front-of-timer")

// Muuttujat ajan mittaamiseen
let seconds = 0;
let minutes = 0;
let hours = 0;

// Tänne talletetaan setIntervalin tunniste,
// jotta ajanotto voidaan pysäyttää clearIntervalilla
let timerId = null;

// Tämä kertoo, onko ajanotto käynnissä vai ei
let isRunning = false;


// Tämä funktio päivittää ajan näytölle
function updateTimerDisplay() {
  const displayHours = String(hours).padStart(2, "0");
  const displayMinutes = String(minutes).padStart(2, "0");
  const displaySeconds = String(seconds).padStart(2, "0");

  timerElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}


// Tämä funktio lisää aikaa sekunti kerrallaan
function tick() {
  seconds = seconds + 1;

  if (seconds === 60) {
    seconds = 0;
    minutes = minutes + 1;
  }

  if (minutes === 60) {
    minutes = 0;
    hours = hours + 1;
  }

  updateTimerDisplay();
}


// Tämä tapahtumankäsittelijä käynnistää ajanoton
function handleStartClick() {
  // Jos ajanotto ei ole käynnissä, aloitetaan se
  if (isRunning === false) {
    timerId = setInterval(tick, 1000);
    isRunning = true;
    startStopButton.textContent = "Stop";
    Stopped.textContent = "Timing";
  }
}


// Tämä tapahtumankäsittelijä pysäyttää ajanoton
function handleStopClick() {
  // Jos ajanotto on käynnissä, pysäytetään se
  if (isRunning === true) {
    clearInterval(timerId);
    isRunning = false;
    startStopButton.textContent = "Start";
    Stopped.textContent = "Stopped";
  }
}


// Tämä tapahtumankäsittelijä päättää,
// käynnistetäänkö vai pysäytetäänkö ajanotto
function handleStartStopClick() {
  if (isRunning === false) {
    handleStartClick();
  } else {
    handleStopClick();
  }
}


// Tämä tapahtumankäsittelijä tyhjentää ajan
function handleClearClick() {
  // Pysäytetään ajanotto varmuuden vuoksi
  clearInterval(timerId);

  // Nollataan arvot
  seconds = 0;
  minutes = 0;
  hours = 0;

  // Päivitetään tila
  isRunning = false;
  startStopButton.textContent = "Start";
  Stopped.textContent = "Stopped";

  // Näytetään nollattu aika
  updateTimerDisplay();
}

setInterval(updateTime, 1000);
console.log('setInterval done');