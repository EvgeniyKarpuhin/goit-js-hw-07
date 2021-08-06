const inputValue = document.querySelector('#validation-input');

const inputLength = inputValue.getAttribute('data-length');
const inputLenTotal = parseInt(inputLength, 6);

inputValue.onchange = function() {
    if (inputValue.value.length === inputLenTotal) {
        inputValue.classList.remove('invalid');
        inputValue.classList.add('valid');
    }
    if (inputValue.value.length === 0) {
        inputValue.classList.remove('valid');
        inputValue.classList.remove('valid');
    }
    if (inputValue.value.length !== inputLenTotal && inputValue.value.length) {
        inputValue.classList.add('invalid');
    }
}