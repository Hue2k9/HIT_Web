const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

const regexEmail = /[\w]+\@gmail\.com/g;
const regexPhone = /((09|03|07|08|05)+([0-9]{8}))/g;

function Display(str) {
     var str1;
     var str2;
     str1 = str.match(regexPhone);
     str2 = str.match(regexEmail);
     if (str1)
          console.log(str1);
     if (str2)
          console.log(str2);
}
Display(textEmail);
Display(textPhone);
