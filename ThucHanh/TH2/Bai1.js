
function Done() {
    const strongRegex = /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    const Isname = /^[a-zA-Z]+$/;
    const tel = /^[0-9]+$/;
    var x = document.getElementsByTagName('input')[0].value;
    var y = document.getElementsByTagName('input')[1].value;
    var z = document.getElementsByTagName('input')[2].value;
    var t = document.getElementsByTagName('input')[4].value;

    if(Isname.test(x)== false) alert("Họ và tên chỉ được dùng chữ cái !")
    if(strongRegex.test(y) == false) alert("Cần 1 chữ hoa,1 chữ thường,1 kí tự đặc biệt,1 số,tối thiểu 8 kí tự !")
    if(z != y) alert("Yêu cầu nhập lại mật khẩu chính xác !")
    if(tel.test(t) == false) alert("Nhập chính xác số điện thoại !")
}
function Clear() {
    var x = document.getElementsByTagName('input');
    var i;
    for(i=0;i<=4;i++) {
        x[i].value="";
    }
}