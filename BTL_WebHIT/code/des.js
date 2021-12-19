//relax
let heart=document.getElementById("heart_heading");
    heart.onclick=function(){
        if (heart.style.color=="white")
        heart.style.color="red";
        else
        heart.style.color="white";
}

//reading events scoll 
window.onscroll = function(){displayBase()};
let contact=document.getElementById("contact_us");
function displayBase(){
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
displayBase();
//display message
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

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
} , 4000);
//navbar
const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active');
});

let index2=1;
changeImage2=function () {
    let imgs=["../image/noel1.png","../image/noel2.png","../image/noel3.png"];
    document.getElementById('noel').src=imgs[index2];
    index2++;
    if (index2==3)
       index2=0;
}
setInterval(changeImage2,1500);

document.getElementById("exit_noel").onclick=function () {
    document.querySelector('.noel').style.display="none";
}
let index3=1;
changeImage3=function () {
    let img2s=["../image/ss.jpg","../image/nuidoi.jpg","../image/banrom.jpg"];
    document.getElementById('SocSon').src=img2s[index3];
    index3++;
    if (index3==3)
       index3=0;
}
setInterval(changeImage3,2500);
let search=document.getElementById("search_menu");
let menuSearch=document.querySelector('.nav-bar-search1');
search.onclick=function(){
    menuSearch.style.display="block";
}
let exitSearch=document.getElementById("exit_search");
exitSearch.onclick=function () {
    menuSearch.style.display="none";
}