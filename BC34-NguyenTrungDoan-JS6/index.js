document.getElementById("ketQua").onclick = function () {
    var S = 0;
    var n = 0;
    
    while(S < 10000)
	{
		n++;
		S = S + n;
	}

    document.getElementById('thongBao').innerHTML = "Số nguyên dương nhỏ nhất là: " + n;
}

function tinhTong(a,b) {
    tich = 1;
    sum = 0;
    for (var i =1; i <= b; i++) {
       tich = tich * a;
       sum = sum + tich;
    }
    return sum;
}


document.getElementById('btnTinhTong').onclick = function () {
    var number1 = document.getElementById("x").value * 1;
    var number2 = document.getElementById("n").value * 1;
    var tong = tinhTong (number1,number2)
     
    document.getElementById("thongBaoTong").innerHTML =  "Tổng là: " + tong;
   
}

function tinhGiaiThua(c) {
    giaiThua = 1;
    for (var i =1; i <= c; i++) {
       giaiThua =  giaiThua * i;
    }
    return giaiThua;
}

document.getElementById('btnTinh').onclick = function () {
    var number3 = document.getElementById('number').value * 1;
  var tong = tinhGiaiThua (number3);

    document.getElementById('thongBaoTinh').innerHTML = "Giai thừa: " + tong;
}

function kiem_tra_snt(n)
{
   
    var flag = true;
 
    
    if (n < 2) {
        flag = false;
    }
    else if (n == 2) {
        flag = true;
    }
    else if (n % 2 == 0) {
        flag = false;
    }
    else {
        for (var i = 3; i <= Math.sqrt(n); i += 2)
        {
            if (n % i == 0) {
                flag = false;
                break;
            }
        }
    }
 
    return flag;
}

document.getElementById("btnIn").onclick = function () {
    var number = document.getElementById("soN").value;
    number = parseInt(number);

    var soNguyenTo = '';
    for (var i = 1; i <= number; i++) {
        // Nếu là số nguyên tố thì in ra
        if (kiem_tra_snt(i)){
            soNguyenTo += i + ' <br/>';
        }
    }
    document.getElementById("thongBaoInSo").innerHTML = soNguyenTo;
}



