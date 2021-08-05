const inputName = document.querySelector('#name-input');
// inputName.addEventListener('input', inputOn);

const outputName = document.querySelector('#name-output');

inputName.oninput = function () {
    if (inputName.value === '') {
        outputName.innerHTML = 'незнакомец';
    } else {
        outputName.innerHTML = inputName.value;
    }
}