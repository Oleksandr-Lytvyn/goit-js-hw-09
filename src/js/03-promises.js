const formRef = document.querySelector('form');
let firstDelay = document.querySelector('[name="delay"]');
let step = document.querySelector('[name="step"]');
let amount = document.querySelector('[name="amount"]');
console.log(firstDelay);
console.log(step);
console.log(amount);

formRef.addEventListener('submit', onSubmit)

function onSubmit(event) {
  event.preventDefault()
  createPromise()
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const timeout = firstDelay.value * 1000;
  console.log(timeout);
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        ;
        resolve(position,delay,console.log('success'))
        ;
      } else {
        // Reject
        reject(position, delay)
      }
    },timeout)
    
  });
  
}



