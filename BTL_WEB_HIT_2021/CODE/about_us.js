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
    let count1=setInterval(myCounting1,8);
    function myCounting1(){
        if((document.body.scrollTop>825) || (document.documentElement.scrollTop>825)){
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
        if((document.body.scrollTop>825) || (document.documentElement.scrollTop>825)){
            listCount[1].innerHTML=k+"K";
            k++;
        }
         if (k==201)
            clearInterval(count2);
    }
    let j=0;
    let count3=setInterval(myCounting3,25);
    function myCounting3(){
        if((document.body.scrollTop>825) || (document.documentElement.scrollTop>825)){
            listCount[2].innerHTML=j;
            j++;
        }
         if (j==151)
            clearInterval(count3);
    }
    let m=0;
    let count4=setInterval(myCounting4,25);
    function myCounting4(){
        if((document.body.scrollTop>825) || (document.documentElement.scrollTop>825)){
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

let char=document.querySelectorAll(".run_vote");
console.log(char);
let pt1=0;
let pt2=0;
let pt3=0;
let pt4=0;
let pt5=5;
let charStar=()=>{
    let increase1=setInterval(increaseStar1,20);
    function increaseStar1(){
        if((document.body.scrollTop>1600) || (document.documentElement.scrollTop>1600)){
            char[0].style.width=pt1+"%";
            pt1++;
        }
        if (pt1===95){
            clearInterval(increase1);
        }
    }
    let increase2=setInterval(increaseStar2,20);
    function increaseStar2(){
        if((document.body.scrollTop>1600) || (document.documentElement.scrollTop>1600)){
            char[1].style.width=pt2+"%";
            pt2++;
        }
        if (pt2===80){
            clearInterval(increase2);
        }
    }
    let increase3=setInterval(increaseStar3,20);
    function increaseStar3(){
        if((document.body.scrollTop>1600) || (document.documentElement.scrollTop>1600)){
            char[2].style.width=pt3+"%";
            pt3++;
        }
        if (pt3===25){
            clearInterval(increase3);
        }
    }
    let increase4=setInterval(increaseStar4,20);
    function increaseStar4(){
        if((document.body.scrollTop>1600) || (document.documentElement.scrollTop>1600)){
            char[3].style.width=pt4+"%";
            char[4].style.width=pt4+"%";
            pt4++;
        }
        if (pt4===6){
            clearInterval(increase4);
        }
    }
}

charStar();