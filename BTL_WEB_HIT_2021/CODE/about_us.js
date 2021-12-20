//Star
let star=document.querySelectorAll(".fa-star");
for(let i=0; i<star.length; i++){
    star[i].onclick=function(){
        for(let j=0; j<=i; j++){
            star[j].style.color="rgb(4, 168, 53)";
        }
        document.getElementById("star_rating-displayMessage").innerHTML="Thank you!";
        for(let k=i+1; k<star.length-1; k++ ){
            star[k].style.color="rgb(216, 216, 214)";
        }
       
        setInterval(function(){
            let x= document.getElementById("starFive").style.display="none";
        }, 1200);
        clearInterval();
    }
}
// Change nhận xét
var clients=document.querySelectorAll(".infoClient");
clients[3].style.display="none";
clients[4].style.display="none";
clients[5].style.display="none";
function Client(){
    var time=0;
    var animate=setInterval(display,2500);
    function display(){
        time++;
        if (time==1){ 
            for(let i in clients){
                if (i<3)
                    clients[i].style.display="block";
                if (i>=3)
                    clients[i].style.display="none";
            }   
        }
        else{
            for(let i in clients){
                if (i<3)
                    clients[i].style.display="none";
                if (i>=3)
                    clients[i].style.display="block";
            }  
            time=0;
        }
    }
}
Client();


    //Count
let listCount=document.querySelectorAll("h1.count");
function Count(){
    let i=0;
    let count1=setInterval(myCounting1,1);
    function myCounting1(){
        if((document.body.scrollTop>780) || (document.documentElement.scrollTop>780)){
            listCount[0].innerHTML=i+"M";
            i++;
        }
        if (i===1000){
            clearInterval(count1);
        }
    }
    let k=0;
    let count2=setInterval(myCounting2,25);
    function myCounting2(){ 
        if((document.body.scrollTop>780) || (document.documentElement.scrollTop>780)){
            listCount[1].innerHTML=k+"K";
            k++;
        }
         if (k==201)
            clearInterval(count2);
    }
    let j=0;
    let count3=setInterval(myCounting3,25);
    function myCounting3(){
        if((document.body.scrollTop>780) || (document.documentElement.scrollTop>780)){
            listCount[2].innerHTML=j;
            j++;
        }
         if (j==151)
            clearInterval(count3);
    }
    let m=0;
    let count4=setInterval(myCounting4,25);
    function myCounting4(){
        if((document.body.scrollTop>780) || (document.documentElement.scrollTop>780)){
            listCount[3].innerHTML=m;
            m++;
        }
        
         if (m==200)
            clearInterval(count4);
    }
}
Count();
    
let send_feedback=document.getElementById("send_feedback");
send_feedback.onclick=function () {
    let text_feedback=document.getElementById("text_feedback");
    text_feedback.value="";
}

let index=1;
changeImage1=function () {
    let imgs=["../image/banner2.png","../image/banner4.jpg"];
    document.querySelector('.banner_about').src=imgs[index];
    index++;
    if (index==2)
      index=0;
}
setInterval(changeImage1,1300);
/*
let search=document.getElementById("search_menu");
let menuSearch=document.querySelector('.nav-bar-search1');
search.onclick=function(){
    menuSearch.style.display="block";
}
let exitSearch=document.getElementById("exit_search");
exitSearch.onclick=function () {
    menuSearch.style.display="none";
}
*/





