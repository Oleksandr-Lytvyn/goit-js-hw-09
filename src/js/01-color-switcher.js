const buttonStartRef = document.querySelector('button[data-start]');
const buttonStopRef = document.querySelector('button[data-stop]');
const bodyRef = document.querySelector('body');
let timerId = null;


buttonStartRef.addEventListener('click', () => {
    timerId =  setInterval(setBodyColor, 1000);
    buttonStartRef. disabled = true;
})
buttonStopRef.addEventListener('click', () => {
    clearInterval(timerId);
    buttonStartRef. disabled = false;
})


function setBodyColor() {
    bodyRef.style.backgroundColor = `${getRandomHexColor()}`
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }