let arr1=[1,2,3]
let arr2=[0]
let arr3=[9]
function change(arr){
    var k="";
    var newArr=[];
    arr.forEach(element => {
        k+=element;
    });
    let num=Math.floor(k);
    num+=1;
    num=num.toString();
    for(let i of num){
        let x=Math.floor(i);
        newArr.push(x);
    }
    console.log(lastArr);
}
change(arr1);
change(arr2);
change(arr3);

