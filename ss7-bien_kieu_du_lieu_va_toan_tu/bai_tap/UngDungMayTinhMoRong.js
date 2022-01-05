let str = "";

function clean() {
    document.getElementById("input-box").value = "";
    str = "";
}

function addToOperator(e) {
    let btn_value = e.target.value;
    str += btn_value;
    document.getElementById("input-box").value = str;

}

function showResult() {
    str = eval(str).toString()
    document.getElementById("input-box").value = str;
}

clean();