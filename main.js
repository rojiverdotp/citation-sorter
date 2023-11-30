let fonts = [
    "Arial",
    "Verdana",
    "Tahoma",
    "Trebuchet MS",
    "Times New Roman",
    "Georgia",
    "Garamond",
    "Courier New",
    "Brush Script MT",
    "Comic Sans MS"
]

function computer() {
    let bruh = document.getElementById("fontFamily");

    fonts.forEach(function(font) {
        let x = document.createElement("option");
        x.innerText = font;
        bruh.appendChild(x);
    })
}

function ok() {
    let a = String(document.getElementById("basta").value);

    document.getElementById("result").value = a.split("\n\n").sort().join("\n\n");
}

function notok() {
    document.getElementById("result").style.fontSize = document.getElementById("fontSize").value + "px";
    document.getElementById("result").style.fontFamily = String(document.getElementById("fontFamily").value);
}