const inputName = document.querySelector('#name-input');
// inputName.addEventListener('input', inputOn);

const outputName = document.querySelector('#name-output');

function () {
    if (inputName.value === '') {
        outputName.innerHTML = 'незнакомец';
    } else {
        outputName.innerHTML = inputName.value;
    }
}