function Huong(){
   var huong=document.getElementById("nhang").style.display="block";
       huong=document.getElementById("nhang").style.position="absolute";
       huong=document.getElementById("nhang").style.left="590px";
       huong=document.getElementById("nhang").style.top="-100px";
       huong1=document.getElementById("nhang");
   //    huong=document.getElementById("nhang").style.top="78px";
   var pos=-100;
 //  var animate=setTimeout(moveBottom,10);
    var animate=setInterval(moveBottom, 10);
   function moveBottom(){
      if (pos==78){
     //    clearTimeout(animate);
          clearInterval(animate);
      }
      else{
         pos++;
         huong1.style.top=pos + 'px';
      }
   }
   //==== KHOI=====
   function bubble() {
      var b = document.createElement('span')
      var size = (Math.random()*150) + 50
      var skew = Math.random()*20
      b.style.width = size +'px'
      b.style.height = size +'px'
      b.style.filter = 'blur(20px)'
      b.style.transform = Math.random() < .5 ? 'skew('+skew*(-1)+'deg)' : 'skew('+skew+'deg)'
      b.style.borderRadius = '50%'
     // b.style.background = 'white'
      b.style.opacity = '.5'
      b.style.position = 'absolute'
    //  b.style.bottom = '-200px'
    ///  b.style.left = Math.random()*(window.innerWidth - 75) + 'px'
      b.style.bottom = '470px'
      b.style.left = '550px'
      b.style.animationDelay = Math.random()*10 + 's'
      b.style.animationDuration = (Math.random()*10) + 2 + 's'
      document.body.appendChild(b)
    }
    setTimeout(function() {
      for(var i=0;i<5;i++) { bubble() }  
    },250)
}
var giaTri;
function Subjects(){
   var selectSubject = document.getElementById("subject");
  
   for(var i=0; i<=8; i++){
      var option=document.createElement("option");
      option.value=i;
      if (i==0)
         option.textContent="==Subject==";
      if (i==1)
         option.textContent="Toán rời rạc";
      if (i==2)
         option.textContent="Kiến trúc máy tính";
      if (i==3){
       
         option.textContent="Tiếng anh CNTT3";
      }
      if (i==4)
         option.textContent="Cơ sở dữ liệu";
      if (i==5){
         option.textContent="kỹ thuật lập trình";
      }
      if (i==6)
         option.textContent="Thiết kế web";
      if (i==7)
         option.textContent="CNXH khoa học";
      if (i==8)
         option.textContent="Tiếng anh CNTT4";
      selectSubject.appendChild(option);
   }
   var e = document.getElementById("subject");
   giaTri = e.options[e.selectedIndex].value;
   var english=document.getElementById("english").style.display="none";
   if (giaTri==3)
        english=document.getElementById("english").style.display="block";
}

Subjects();
function DisplayText(){
   var text=document.getElementById("text").value;
   document.getElementById("display").innerHTML=text;
   document.getElementById("text").value='';
   var d=document.getElementById("display").style.backgroundColor="white";
   d=document.getElementById("display").style.color="blue";
   d=document.getElementById("display").style.marginLeft="-70px";
   d=document.getElementById("display").style.marginBottom="3px";
   d=document.getElementById("display").style.marginTop="3px";
   d=document.getElementById("display").style.left="0px";
   d=document.getElementById("display").style.bottom="200px";
       d1=document.getElementById("display");
   var pos=300;
    var animate=setInterval(moveBottom, 2);
   function moveBottom(){
      if (pos==1000){
          clearInterval(animate);
      }
      else{
         pos+=5;
         d1.style.bottom=pos + 'px';
      }
   }
}

//================HOA ROI=================
	
   
function pray(){
   DisplayText();
   Huong();
   var audio = new Audio('../image/xin.mp3');
      audio.play();
}
