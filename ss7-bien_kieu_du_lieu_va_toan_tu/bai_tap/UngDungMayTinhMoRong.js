
let str = "";
function clear() {
    document.getElementById("input-box").value = "";
}

function addToOperator(e) {
    document.getElementById("input-box").value;
    let btn_value = e.target.value;
    str += btn_value;
    console.log(str);
    document.getElementById("input-box").value = str;

}
function deleteAll() {
    clear();
    str = "";
}
function showResult() {
    str = eval(str).toString()
    document.getElementById("input-box").value = str;
}
clear();