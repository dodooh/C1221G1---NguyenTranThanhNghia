let showResult = document.getElementById("showResult"); // Show tiêu đề bài tập
let showStep = document.getElementById("showStep"); // Show các bước nhập của người dùng
let showProblem = document.getElementById("showProblem"); // Show kết quả tính toán

function clear() {
    showResult.innerHTML = "";
    showStep.innerHTML = "";
    showProblem.innerHTML = "";
}

function bai1() {
    clear()
    // Show tiêu đề bài tập
    showProblem.innerHTML = "<h3>Chương trình tính điểm trung bình</h3>";
    let vatLy = parseFloat(prompt("Nhập điểm vật lý: "))
    let hoaHoc = parseFloat(prompt("Nhập điểm hóa học: "))
    let sinhHoc = parseFloat(prompt("Nhập điểm sinh học: "))
    let diemTrungBinh = (vatLy + hoaHoc + sinhHoc) / 3.0;
    // Show các bước nhập của người dùng
    showStep.innerHTML = "<h5>Điểm Vật Lý là: " + vatLy + "</h5>"
        + "<h5>Điểm Hóa Học là: " + hoaHoc + "</h5>"
        + "<h5>Điểm Sinh Học là: " + sinhHoc + "</h5>"
    // Show kết quả tính toán
    showResult.innerHTML     = "<h4>" + "Điểm trung bình là: " + diemTrungBinh + "</h4>";
}
function bai2() {
    clear()
    // Show tiêu đề bài tập
    showProblem.innerHTML = "<h3>Chương Trình Chuyển đổi nhiệt độ</h3>";
    let doC = parseFloat(prompt("Nhập độ C: "))
    let doF = 9 * doC / 5.0 + 32
    // Show kết quả tính toán
    showResult.innerHTML     = "<h4>" + doC + "<sup>o</sup> C = " + doF + " <sup>o</sup> F</h4>";
}
function bai3() {
    clear()
    // Show tiêu đề bài tập
    showProblem.innerHTML = "<h3>Chương Trình Tính Diện Tích Hình Tròn</h3>";
    let r = parseFloat(prompt("Nhập Bán Kính: "))
    // Show các bước nhập của người dùng
    let area = r * r * 3.14;
    showStep.innerHTML = "<h5>" + "Bán kính là: " + r + "</h5>"
    // Show kết quả tính toán
    showResult.innerHTML = "<h4>" + "Diện Tích Hình Tròn là: " + area + "</h4>";
}
function bai4() {
    clear()
    // Show tiêu đề bài tập
    showProblem.innerHTML = "<h3>Chương Trình Tính Chu Vi Hình Tròn</h3>";
    let r = parseFloat(prompt("Nhập Bán Kính: "))
    // Show các bước nhập của người dùng
    let peri = 2 * r * 3.14;
    showStep.innerHTML = "<h5>" + "Bán kính là: " + r + "</h5>"
    // Show kết quả tính toán
    showResult.innerHTML = "<h4>" + "Chu Vi Hình Tròn là: " + peri + "</h4>";
}