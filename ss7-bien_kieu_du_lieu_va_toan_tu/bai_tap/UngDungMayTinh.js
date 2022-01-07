function calculate(e) {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let operate = e.target.value;
    let result = eval(a + operate + b);
    document.getElementById("show-result").innerText = result;
}

