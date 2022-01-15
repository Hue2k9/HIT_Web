function CheckName(){
    let username=document.getElementById("name").value; 
    if (username=='' || username==NaN)
    return false;
    for(let i=0; i<username.length; i++){
        if (username.charAt(i)>='0' && username.charAt(i)<='9')
        return false;
    }
    return true;
}

function CheckPassWord(){
    var password=document.getElementById("password").value;

    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if(regexPassword.test(password)) 
    return true;
    else return false;
}

function CheckPassWordAgain(){
    var count=0;
    var password1=document.getElementById("password").value;
    var password2=document.getElementById("passwordagain").value;
    for(let i=0; i<password1.length; i++){
        if (password1.charAt(i)==password2.charAt(i))
           count++;
    }
    if (count==password1.length && password1.length==password2.length)
       return true;
    else
    return false;
}

function CheckPhone(){
    var phone=document.getElementById("phone").value;
    var count=0;
    for(let i=0; i<phone.length; i++){
        if ((phone.charAt(i)>='0' && phone.charAt(i)<='9') || phone.charAt(i)==')' || phone.charAt(i)=='(' )
           count++;
    }
    if (count==phone.length)
       return true;
    else
    return false;
}
function CheckDate(){
    
}
function CheckEmail(){
    var email=document.getElementById("email").value;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(email))
       return true;
    return false;
}
function CheckImage(){
    var file=document.getElementById("file");
    console.log(file.files[0]);

}
function Check(){
    if (CheckName()==false)
      document.getElementById("checkname").innerHTML="Tên phải là chữ";
    else 
    document.getElementById("checkname").innerHTML="";

    if (CheckPassWord()==false){
        document.getElementById("checkpassword").innerHTML="mật khẩu phải tồn tại ít nhất 1 chữ hoa, 1 chữ thường, 1 ký tự đặc biệt và 1 chữ số và có tối thiểu 8 ký tự.";
    }
    else
    document.getElementById("checkpassword").innerHTML="";
  
    if (CheckPassWordAgain()==false){
        document.getElementById("checkpasswordagain").innerHTML="Mật khẩu không trùng khớp";
    }
    else
    document.getElementById("checkpasswordagain").innerHTML="";

    if (CheckPhone()==false){
        document.getElementById("checkphone").innerHTML="Hộp số điện thoại không được dùng ký tự và ký tự đặc biệt ngoại trừ dấu ( )-";
    }
    else
    document.getElementById("checkphone").innerHTML="";
    if (CheckEmail()==false){
        document.getElementById("checkemail").innerHTML="Sai dia chi email";
    }
    else
       document.getElementById("checkemail").innerHTML="";
/*    
    if (CheckName()==true && CheckPassWord()==true && CheckPassWordAgain()==true && CheckPhone()==true && CheckEmail()==true)
        alert("Chuc mung ban da dang ky thanh cong");
    else
        alert("Dang ky khong thanh cong");
*/
CheckImage();
}