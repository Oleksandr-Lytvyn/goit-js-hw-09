import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";



const inputRef = document.querySelector('input#datetime-picker');
const buttonRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
console.log(daysRef, hoursRef, minutesRef, secondsRef);

  let fp = null;
  let deadline = null;
  let timerId = null;

  buttonRef.disabled = true;

  fp = flatpickr(inputRef, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentTime = new Date;
        deadline = fp.selectedDates[0];
        const delta =  deadline.getTime() - currentTime.getTime()
        if (delta <= 0) {
            return window.alert("Please choose a date in the future")
        }
        buttonRef.disabled = false;
        console.log(delta);
    },
  });
  buttonRef.addEventListener('click', onStartButtonClick)

  function onStartButtonClick () {
    timerId = setInterval(initializeTimer, 1000);;
  }
  function initializeTimer () {
    const currentTime = new Date;
    const delta =  deadline.getTime() - currentTime.getTime()
    const timeToInitialize = convertMs(delta);
    if (delta <= 1000) {
        clearInterval(timerId);
    }
    daysRef.textContent = timeToInitialize.days;
    hoursRef.textContent = timeToInitialize.hours;
    minutesRef.textContent = timeToInitialize.minutes;
    secondsRef.textContent = timeToInitialize.seconds;
    

  }
  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
