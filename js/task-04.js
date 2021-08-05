const number = document.querySelector('#counter');
const valueId = document.querySelector('#value');
const decrement = number.firstElementChild;
const increment = number.lastElementChild;

function decrem() {
    valueId.textContent -= 1;
}

function increm () {
    valueId.textContent +=1;
}

decrement.addEventListener('click', decrem);
increment.addEventListener('click', increm);