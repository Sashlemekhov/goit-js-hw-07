const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', inputChangeHandler);

function inputChangeHandler(event) {
  outputRef.textContent = event.target.value;
  if (event.target.value === '') {
    outputRef.textContent = 'незнакомец';
  };
};

