("use strict");
// == FUNCTIONS == //
const getRandomNumber = () => Math.floor(Math.random() * words.length);

// == ARRAY SHUFFLE == //
const shuffle = (array) => {
  let arrayCopy = [...words];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
  }
  return arrayCopy;
};

// == GAME VARUABLES == //

const words = [
  "mike",
  "rusty",
  "startrek",
  "doom",
  "wedding",
  "register",
  "prescription",
  "tolerant",
  "behavior",
  "decoration",
  "achieve",
  "bucket",
  "threat",
  "cool",
  "exploit",
  "faint",
  "soldier",
  "statement",
  "penalty",
  "calf",
  "pudding",
  "lighter",
  "customer",
  "cow",
  "minister",
  "velvet",
  "primary",
  "nonsense",
  "creation",
  "recover",
  "drain",
  "mole",
  "coffin",
  "mercy",
  "queen",
  "cupboard",
  "explain",
  "plot",
  "leash",
  "fleet",
  "circulation",
  "policeman",
  "process",
  "generate",
  "hypothesis",
  "fever",
  "progressive",
  "father",
  "laundry",
  "clerk",
  "preach",
  "mechanism",
  "tree",
  "democratic",
  "pour",
  "recession",
  "football",
  "skip",
  "kill",
  "roar",
  "gradual",
  "youth",
  "rub",
  "page",
  "likely",
  "water",
  "flesh",
  "census",
  "craft",
  "proud",
  "reference",
  "theory",
  "plagiarize",
  "guide",
];

let randomNumber;
let inSeconds = 60;
let time = inSeconds;
let game = false;
let text = "";
let wordCount = 0;
let data;
let timesUp = false;

// == MANIPULATION HTML == //
const timeElement = document.querySelector(".time");
const wordDisplay = document.querySelector(".wordDisplay");
const space = document.querySelector(".space");
const typeInput = document.querySelector(".typeInput");
const upcoming = document.querySelector(".upcoming");
const wpmElement = document.querySelector(".wpm");
// == STARTS GAME ON ENTER ==//
document.addEventListener("keydown", function (e) {
  if (!game) {
    if (e.key === "Enter") {
      data = shuffle(words);
      wordDisplay.textContent = data[0];
      upcoming.textContent = data[1];
      timer();
      space.classList.add("hidden");
      game = true;
      timesUp = false;
      wordCount = 0;
      typeInput.classList.remove("hidden");
      typeInput.focus();
      wpmElement.textContent = "?";
      if (text !== 0) {
        text = 0;
        typeInput.value = "";
      }
    }
  }
});

// == KEYBORD INPUT == //
document.addEventListener("keyup", function (e) {
  if (!timesUp) {
    text = typeInput.value;
    if (text === data[0]) {
      text = 0;
      typeInput.value = "";
      wordCount++;
      data.shift();
      wordDisplay.textContent = data[0];
      upcoming.textContent = data[1];
    }
  }
});

// == TIMER FUNCTION ==//
let timeCount;
const timer = function () {
  if (time > 0) {
    timeCount = setInterval(function () {
      if (time > 0) {
        time--;
        timeElement.textContent = time;
      } else {
        timesUp = true;
        game = false;
        wordDisplay.textContent = "Time's Up!";
        space.classList.remove("hidden");
        typeInput.classList.add("hidden");
        time = inSeconds;
        wpmElement.textContent = wordCount;
        stopInterval();
      }
    }, 1000);
  }
};

function stopInterval() {
  clearInterval(timeCount);
}
