const case1 = "    hOang Bui   ";
// -> Hoang Bui
const case2 = " hOANG      BUI   hOang     ";
// -> "Hoang Bui Hoang"
const case3 = "23traN    dUOng23     ";
// -> "Tran Duong"

function ChuanHoa(name){
   //Bỏ khoảng trắng 2 đầu
   name=name.trim();
   //Chỉ 1 khoảng trắng ở giữa
   for(let i=0; i<name.length-1; i++){
       name=name.replace("  "," ");
   }

   //Chuyen ve in thuong và bỏ số
   var s1="";
   name=name.toLowerCase();
   if (name.charAt(0)<='0' || name.charAt(0)>='9')
      s1+=name.charAt(0);
      s1=s1.toUpperCase();
        for(let i=1; i<name.length; i++){
            var k="";
            k+=name.charAt(i);
            if (name.charAt(i-1)==' '){
                k=k.toUpperCase();
            }
            if (k>="0" && k<="9")
               k="";
            s1+=k;
        }
    //Fix
    var check="";
    for(let i=0; i<s1.length; i++){
        var k="";
        k+=s1.charAt(i);
        if(i==0 && k>='a' && k<='z')
          k=k.toUpperCase();
        check+=k;
    }
   console.log(check);
}
ChuanHoa(case1);
ChuanHoa(case2);
ChuanHoa(case3);