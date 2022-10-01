const formRef = document.querySelector('form');
let position = 0;

// console.log(step);
// console.log(amount);

formRef.addEventListener('submit', onSubmit)

function onSubmit(event) {
  
  event.preventDefault()
  let delay = document.querySelector('[name="delay"]').value;
let step = document.querySelector('[name="step"]').value;
let amount = document.querySelector('[name="amount"]').value;

  createPromise(position, delay)
  .then(onSuccess)
  .catch(onError)
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(()=>{
      if (shouldResolve) {
        // Fulfill
        ;
        resolve({position, delay})
        ;
      } else {
        // Reject
        reject({position, delay})
      }
    },delay)
    
  });
  
}
function onSuccess({position, delay}) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
} 
function onError({position, delay}) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}


