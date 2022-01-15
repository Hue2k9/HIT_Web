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
        if ((phone.charAt(i)>='0' && phone.charAt(i)<='9') || phone.charAt(i)==')' || phone.charAt(i)=='(' || phone.charAt(i)=='-' )
           count++;
    }
    if (count==phone.length)
       return true;
    else
    return false;
}
function CheckDate(){
    var date=document.getElementById("date");
    if (!date.value)
       return false;
    return true;
}
function CheckImage(){
    var file=document.getElementById("file");
    if (!file.files[0])
       return false;
    return true;
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

    var submit=document.getElementById("dk");  
    submit.addEventListener("click",(e) =>{
        e.preventDefault();
        if (CheckDate()==true && CheckImage()==true&& CheckName()==true && CheckPassWord()==true && CheckPassWordAgain()==true && CheckPhone()==true )
          {
            alert("Chuc mung ban da dk thanh cong");
            return;
          }
          
        else
           {
            alert("DK khong thanh cong. Vui long kiem tra lai");
            return;
           }
        });  

  /* 
    submit.addEventListener("click", function(){
        if (CheckDate()==true && CheckImage()==true && CheckName()==true && CheckPassWord()==true && CheckPassWordAgain()==true && CheckPhone()==true )
           alert("Chuc mung ban da dk thanh cong");
          
        else
           alert("DK khong thanh cong. Vui long kiem tra lai");
    });
       */ 
}
function DeleteForm(){
    document.getElementById("myform").reset();
}
