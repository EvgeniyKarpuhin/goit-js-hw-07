function text(value) {
    document.getElementById('font-size-control').style.transform.fontSize = "fontSize(" + value + "px)";
    document.getElementById('text').innerHTML = value + "px";
}