const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');
let counterValue = 0;

decrementBtnRef.addEventListener('click', decreaseCounterHandler);
incrementBtnRef.addEventListener('click', increaseCounterHandler);

function decreaseCounterHandler(event) {
  counterValue -= 1;
  value.textContent = counterValue;
};

function increaseCounterHandler(event) {
  counterValue += 1;
  value.textContent = counterValue;
};