function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const start = document.querySelector('[data-start]');
const end = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let startId = 0;
start.addEventListener('click', () => {
  startId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  start.setAttribute('disabled', 'true');
});

end.addEventListener('click', () => {
  clearInterval(startId);
  start.removeAttribute('disabled');
});
