const str1="tranduong";
const str2="hitclubhiuhiu";
const str3="aabb";
function findChar(str){
   for(let i in str){
      let k=str[i];
      if (str.indexOf(k)==i && str.lastIndexOf(k)==i)
         return i;
   }
   return -1;
}
console.log(findChar(str1));
console.log(findChar(str2));
console.log(findChar(str3));