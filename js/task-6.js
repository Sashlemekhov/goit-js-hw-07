const inputValidationRef = document.querySelector('#validation-input');
const dataLengthAttribute = inputValidationRef.getAttribute('data-length');

inputValidationRef.addEventListener('change', inputValidationHandler);

function inputValidationHandler(event) {
  if (event.target.value.length === Number(dataLengthAttribute)) {
    inputValidationRef.classList.add("valid");
    inputValidationRef.classList.remove("invalid");
  }
  else {
    inputValidationRef.classList.add("invalid");
    inputValidationRef.classList.remove("valid");
  }
};