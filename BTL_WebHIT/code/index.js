//Đọc sự kiện thanh cuộn
window.onscroll = function(){displayHeading()};
let contact=document.getElementById("contact_us");
function displayHeading(){
    //Display background heading
    if (document.body.scrollTop>150 || document.documentElement.scrollTop>200){
        var bgrHeading=document.getElementById("menu").style.backgroundColor="rgba(9, 131, 202,0.95)";
    }
    else{
        bgrHeading=document.getElementById("menu").style.backgroundColor="";
    }
        //Comeback top
        if (document.body.scrollTop>500|| document.documentElement.scrollTop>500){
            let returnTop=document.getElementById("comeback_top").style.display="block";
        }
        else{
            returnTop=document.getElementById("comeback_top").style.display="none";
        }
    
        //Contact
        if (document.body.scrollTop>500|| document.documentElement.scrollTop>500){
         contact.style.bottom="80px";
        }
        else{
          contact.style.bottom="40px";
        }
}
let  chatDisplay=document.getElementById("chatDisplay");
chatDisplay.style.display="none";
contact.addEventListener("click",displayContact);
function displayContact(){
    chatDisplay.style.display="block";
    contact.style.display="none";
}
let exitMessage=document.getElementById("exit");
exitMessage.addEventListener("click",disAppearMessage);
function disAppearMessage(){
    chatDisplay.style.display="none";
    contact.style.display="block";
}
//Display content heading
var headingText=document.getElementById("textHeaderBackground").style.marginTop="160px";
    headingText1=document.getElementById("textHeaderBackground");
function contentHeading(){
    var time=160;
    var animate=setInterval(display,10);
   function display(){
    if (time===80){
        clearInterval(animate);
    }
    else{
        time-=1;
        headingText1.style.marginTop= time+'px';
    }
   }
}
contentHeading();

//Thả tim
let heart=document.getElementById("heart_heading");
    heart.onclick=function(){
        if (heart.style.color=="white")
        heart.style.color="red";
        else
        heart.style.color="white";
}

let bars=document.getElementById("bars");
let bar=document.querySelector("div.navbar-links");
bars.onclick = function () {
    if (bar.style.display=="none")
    bar.style.display="block";
    else
    bar.style.display="none";   
}

let index=1;
changeImage1=function () {
    let img1s=["../image/animal1.jpg","../image/animal4.jpg","../image/animal5.jpg"];
    let img2s=["../image/animal2.jpg","../image/animal6.jpg","../image/animal7.jpg"];
    let img3s=["../image/animal3.jpg","../image/animal8.jpg","../image/animal9.jpg"];
    document.getElementById('img_content1').src=img1s[index];
    document.getElementById('img_content2').src=img2s[index];
    document.getElementById('img_content3').src=img3s[index];
    index++;
    if (index==3)
      index=0;
}
setInterval(changeImage1,1300);
let search=document.getElementById("search_menu");
let menuSearch=document.querySelector('.nav-bar-search1');
search.onclick=function(){
    menuSearch.style.display="block";
}
let exitSearch=document.getElementById("exit_search");
exitSearch.onclick=function () {
    menuSearch.style.display="none";
}