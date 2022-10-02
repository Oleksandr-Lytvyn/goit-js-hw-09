import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formRef = document.querySelector('form');
let position = 0;
let timeout = 0;

// console.log(step);
// console.log(amount);

formRef.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  let delay = Number(document.querySelector('[name="delay"]').value);
  let step = Number(document.querySelector('[name="step"]').value);
  let amount = Number(document.querySelector('[name="amount"]').value);

  for (let i = 0; i < amount; i++) {
    position += 1;
    createPromise(position, delay).then(onSuccess).catch(onError);
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
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
function onSuccess({ position, delay }) {
  Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
}
function onError({ position, delay }) {
  Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
}
