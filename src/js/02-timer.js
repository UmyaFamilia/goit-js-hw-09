import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const inpute = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const days = document.querySelector('[ data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
let timerStarted = false;
let returnsObjeckt = {};
let intervalId = 0;
let newNumber = 0;
start.setAttribute('disabled', 'true');

//
//
//
//
//
//

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  //
  //
  //
  //
  //
  onClose(selectedDates) {
    if (Number(options.defaultDate) > Number(selectedDates[0])) {
      alert('Please choose a date in the future');
      start.setAttribute('disabled', 'true');
    } else {
      start.removeAttribute('disabled');
    }
    //
    //
    //

    start.addEventListener('click', () => {
      start.setAttribute('disabled', 'true');

      if (!timerStarted) {
        timerStarted = true;
        intervalId = setInterval(() => {
          newNumber = selectedDates[0] - new Date();
          returnsObjeckt = convertMs(newNumber);
          addLeadingZero(returnsObjeckt);
          if (newNumber < 1000) {
            clearInterval(intervalId);
          }
        }, 1000);
        //
        //
        //
      }
    });
  },
};

function addLeadingZero(value) {
  days.textContent = value.days.toString().padStart(2, '0');
  hours.textContent = value.hours.toString().padStart(2, '0');
  minutes.textContent = value.minutes.toString().padStart(2, '0');
  seconds.textContent = value.seconds.toString().padStart(2, '0');
}

flatpickr(inpute, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
