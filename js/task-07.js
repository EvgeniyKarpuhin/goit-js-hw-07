function text(value) {
    document.getElementById('font-size-control').style.transform = "fontsize(" + value + "px)";
    document.getElementById('text').innerHTML = value + "px";
}