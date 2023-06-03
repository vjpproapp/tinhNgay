function myFunction() {
    let ngayBatDau = document.getElementById('DateStart').value;
    let ngayKetThuc = document.getElementById('DateEnd').value;
    console.log(`ngày bắt đầu: ${ngayBatDau} \n ngày kết thúc: ${ngayKetThuc} `)
    if(ngayBatDau == "" && ngayKetThuc == "") {
        alert("Nhập ngày vào đã đcm");
    } else if(parseInt(ngayBatDau) > parseInt(ngayKetThuc))  {
        alert("Nhập ngược cmnr");
    } else if(parseInt(ngayBatDau) <= 0 || parseInt(ngayBatDau) >= 31 || parseInt(ngayKetThuc) <= 0 || parseInt(ngayKetThuc) >= 31) {
        alert("Đcm nhập cho đúng, tháng 10 chỉ có 31 ngày thôi");
    }
    else {
    document.getElementById("tinhNgay").innerHTML = `Từ ngày ${ngayBatDau}/10 đến ngày ${ngayKetThuc}/10 thì sẽ có 
                                                        ${ngayKetThuc - ngayBatDau + 1} ngày chứ cc gì nữa, 
                                                        tưởng ${ngayKetThuc - ngayBatDau} ngày cái cc à đcm <br>( ͡° ͜ʖ ͡°)`;
                                                        
    
    }
    ngayBatDau.value = '';
    ngayKetThuc.value = '';
}