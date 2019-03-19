var old = " ";

function navHover(id) {
    document.getElementById(id).style.background = "#007EA7";
    document.getElementById(id).style.color = "white";
    old = id;
}

function navHoverEnd(id) {
    document.getElementById(id).style.background = "none";
    document.getElementById(id).style.color = "white";
}