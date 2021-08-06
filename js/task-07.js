const control = document.getElementById('font-size-control');
const text = document.getElementById('text');

control.oninput = function() {
    text.style.fontSize = control.value + 'px';
}