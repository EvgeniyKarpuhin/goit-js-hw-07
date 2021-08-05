const number = document.querySelector('#counter');
const valueId = document.querySelector('#value');
const decrement = number.firstElementChild;
const increment = number.lastElementChild;

decrement.addEventListener('click', decrem);
increment.addEventListener('click', increm);

function decrem() {
    valueId.textContent -= 1;
}

function increm () {
    // valueId.textContent +=1;
    valueId.textContent = Number(valueId.textContent) + 1;
}

