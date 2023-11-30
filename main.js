function ok() {
    let a = String(document.getElementById("basta").value);

    document.getElementById("result").innerText = a.split("\n\n").sort().join("\n\n");
}