
function calculate() {
    let from = document.getElementById("dd-from").value;
    let to = document.getElementById("dd-to").value;
    let amount = parseFloat(document.getElementById("tx-amount").value);
    let result = 0;
    if (from == to) {
        result = amount;
    } else if (from == "VND") {
        result = amount / 23000;
    } else {
        result = amount * 23000;
    }
    document.getElementById("showResult").innerText = "Result: " + result + " " + to;
}