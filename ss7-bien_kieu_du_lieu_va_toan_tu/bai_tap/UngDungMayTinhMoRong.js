let str = "";

function clean() {
    document.getElementById("input-box").value = "";
    str = "";
}

function addToOperator(e) {
    let btnValue = e.target.value;
    str += btnValue;
    document.getElementById("input-box").value = str;

}

function showResult() {
    str = eval(str).toString()
    document.getElementById("input-box").value = str;
}

clean();