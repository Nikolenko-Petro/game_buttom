function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const startBtnEl = document.querySelector('.start');
const tapBtnEl = document.querySelector('.tap');
const scoreEl = document.querySelector('.score');
const stopBtnEl = document.querySelector('.stop');

let id = null;
scoreEl.value = 0;
let score = null;

function handleButtonClick() {
  startBtnEl.classList.add('is-hidden');
  tapBtnEl.classList.remove('is-hidden');

  id = setInterval(() => {
    tapBtnEl.style.cssText = `top: ${getRandomNumber(
      0,
      800
    )}px; left: ${getRandomNumber(0, 1100)}px`;
  }, 500);
}

function handleTapButtonClick() {
  score = scoreEl.value += 10;
  scoreEl.textContent = score;
}

function handleStopButtonClick() {
  startBtnEl.classList.remove('is-hidden');
  tapBtnEl.classList.add('is-hidden');
  clearInterval(id);
  scoreEl.textContent = 0;
  scoreEl.value = 0;
}

startBtnEl.addEventListener('click', handleButtonClick);
tapBtnEl.addEventListener('click', handleTapButtonClick);
stopBtnEl.addEventListener('click', handleStopButtonClick);
