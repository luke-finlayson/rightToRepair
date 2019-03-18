var old = " ";

function navHover(id) {
    document.getElementById(id).style.background = "#1C5D99";
    document.getElementById(id).style.color = "white";
    old = id;
}

function navHoverEnd(id) {
    document.getElementById(id).style.background = "none";
    document.getElementById(id).style.color = "black";

    
}