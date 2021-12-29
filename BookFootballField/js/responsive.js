function xuatHien() {
    var a = document.getElementById("xuatHien");
    if (a.className === "") {
        a.className = "bienMat";
    } else {
        a.className = "";

    }
}

function xuatHienSan() {
    var b = document.getElementById("xuong");
    if (b.className === "roiXuong dieuHuong") {
        b.className += " bienMat";
    } else {
        b.className = "roiXuong dieuHuong";

    }
}

function bienMat() {
    // var b = document.getElementById("xuatHien")
    var b = document.getElementById("navbarNavDropdown")
        // var c = document.getElementById("xuong")
    document.onclick = function(e) {
        // if (e.target.id !== "hiddenIcon" && e.target.id !== "timSanBong") {
        if (e.target.id !== "hiddenIcon" && e.target.id !== "navbarDropdownMenuLink") {
            b.className = "collapse navbar-collapse";
            // c.className = "bienMat";
        }
    }
}