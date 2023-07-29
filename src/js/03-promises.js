const form = document.querySelector('.form');
const delay = document.querySelector(`[name="delay"]`);
const step = document.querySelector(`[name="step"]`);
const amount = document.querySelector(`[name="amount"]`);
//
//
//
//
//
form.addEventListener('submit', start);
//
//
//
//
//
//
//
//
//

function start(evnt) {
  evnt.preventDefault();
  let delayValue = Number(delay.value);
  const stepValue = Number(step.value);
  const amountValue = Number(amount.value);

  for (let i = 1; i <= amountValue; i++) {
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delayValue += stepValue;
  }
}
//
//
//
//
//
//
//
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill

        resolve({ position, delay });
      } else {
        // Reject

        reject({ position, delay });
      }
    }, delay);
  });
}
//
//
//
//
//
