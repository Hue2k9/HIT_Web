let arr1=[1,2,3]
let arr2=[0]
let arr3=[9]
let a=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5678,1,9,9,99];
let b=[9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9];
function spliceArray(arr, size){
    var newArr = [];
    let i=0
    while (i<arr.length) {
        newArr.push(arr.splice(0,size));
        i++;
    }
    return newArr;
}
function sizeOfNum(n){
    return n.toString().length;
}
function change(arr){
    let k="";
    let newArr1=spliceArray(arr,10);
    let newArr2=[];
    let str="";
    //Tách thành từng mảng
    for(let i in newArr1){    
        for (let j of newArr1[i]){
           str+=j.toString();
        }
        newArr2.push(str);
        str="";
    }
    for(let i=0; i<newArr2.length; i++){
        newArr2[i]=Math.floor(newArr2[i]);
    }
    //Cộng 1
    for(let i=newArr2.length-1; i>=0; i--){
        newArr2[i]+=1;
        if(sizeOfNum(newArr2[i])==sizeOfNum(newArr2[i]-1)){
              break;
        }
        else{
            if(i!=0){
                k=newArr2[i].toString();
               let j="";
           for(let n=1; n<k.length; n++){
              j+=k[n];
            }
            newArr2[i]=j;
            }
        }
    }
    //Đưa về 1 mảng
    let lastStr="";
    let newArr=[];
    newArr2.forEach(element => { 
        lastStr+=element;
    });
    for(let i of lastStr){
        newArr.push(Math.floor(i));
    }
    console.log(newArr);
}

change(arr1);
change(arr2);
change(arr3);
change(a);
change(b);

