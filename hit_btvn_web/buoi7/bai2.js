let arr1=[1,2,3]
let arr2=[0]
let arr3=[9]
function Change(arr){
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
Change(arr1);
Change(arr2);
Change(arr3);

