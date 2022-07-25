document.getElementById('btnDoiMau').onclick = function () {
    var divs = document.getElementsByTagName("div");
                for (var i = 0; i < divs.length; i++){
                    // Vị trí chẵn => màu đỏ
                    if ((i + 1) % 2 == 0){
                        divs[i].style.background = "red";
                    }
                    else { // Vị trí lẽ => màu xanh
                        divs[i].style.background = "blue";
                    }
                }
}