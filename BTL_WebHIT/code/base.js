//Thả tim
let heart=document.getElementById("heart_heading");
    heart.onclick=function(){
        if (heart.style.color=="white")
        heart.style.color="red";
        else
        heart.style.color="white";
}

//Đọc sự kiện thanh cuộn
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

let bars=document.getElementById("bars");
let bar=document.querySelector("div.navbar-links");
bar.style.display="none";
bars.onclick = function () {
    if (bar.style.display=="none")
    bar.style.display="block";
    else
    bar.style.display="none";
}

let search=document.getElementById("search_menu");
let menuSearch=document.querySelector('.nav-bar-search1');
search.onclick=function(){
    menuSearch.style.display="block";
}
let exitSearch=document.getElementById("exit_search");
exitSearch.onclick=function () {
    menuSearch.style.display="none";
}