// lấy thông tin từ các thẻ tại trang chủ rồi qua trang thông tin.
function getTenSan(tensan) {
    var x = document.getElementById(tensan).textContent;
    sessionStorage.setItem("nameField", x);
}

function readTenSan() {
    var x = sessionStorage.getItem("nameField");
    document.getElementById("tensan").value = x;
}

function getDiaChi(diachi) {
    var x = document.getElementById(diachi).textContent;
    sessionStorage.setItem("addressField", x);
}

function readDiaChi() {
    var x = sessionStorage.getItem("addressField");
    document.getElementById("diachi").value = x;
}

function getLienHe(lienhe) {
    var x = document.getElementById(lienhe).textContent;
    sessionStorage.setItem("infoField", x);
}

function readLienHe() {
    var x = sessionStorage.getItem("infoField");
    document.getElementById("lienhe").value = x;
}


//Tổng tiền
// Nếu người dùng thay đổi lựa chọn, hoặc thay đổi giá trị điền thì tổng tiền sẽ tự động được tính lại theo đúng công thức.-- gắn vào onchange vào tất cả các input
function tongTien() {
    //Tiền sân = Giá tiền theo khung giờ * Số giờ.
    var a = document.getElementById("time").value;
    var b = document.getElementById("timeTotal").value;
    var c = a * b;
    console.log("Tiền sân = " + c);
    //Tiền đồng phục = Số đội chơi * Đồng phục thi đấu (300k/đội)
    var d = document.getElementById("noTeam").value;
    var e;
    if (document.getElementById("service2").checked == true) {
        e = d * 300;
        console.log("Tiền đồng phục = " + e);
    } else {
        e = 0;
        console.log("Tiền đồng phục = " + e);
    }
    //Tiền thuê trọng tài = Số giờ * Thuê trọng tài (200k/h)
    var f = document.getElementById("timeTotal").value;
    var g;
    if (document.getElementById("service3").checked == true) {
        g = f * 200;
        console.log("Tiền trọng tài = " + g);
    } else {
        g = 0;
        console.log("Tiền trọng tài = " + g);
    }
    //Tổng tiền = Tiền sân + Tiền đồng phục (nếu có) + Tiền thuê trọng tài (nếu có)
    var t = (g + e + c) * 1000;
    console.log("Tổng tiền = " + t);
    console.log(isNaN(t));
    // số người chơi
    var h = document.getElementById("noHuman").value;
    // Nếu người dùng chưa điền hoặc điền sai thông tin vào các trường thì sẽ hiển thị thông báo “Hãy lựa chọn thông tin đặt sân”. Thông báo màu đỏ, hiển thị ở vị trí dùng để hiển thị Tổng tiền.--- gắn vào onchange
    if (t <= 0 || isNaN(t) || b <= 0 || h <= 0) {
        document.getElementById("money").value = "Hãy lựa chọn thông tin đặt sân !";

    } else {
        document.getElementById("money").value = t.toLocaleString() + " VNĐ";
    }
}