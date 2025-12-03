function press(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    let expr = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expr);
    } catch {
        alert("Invalid Expression");
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}
