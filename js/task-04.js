const number = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
const decrement = number.firstElementChild;
const increment = number.lastElementChild;

decrement.addEventListener('click', decrem);
increment.addEventListener('click', increm);

function decrem() {
    counterValue.textContent -= 1;
}

function increm () {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

