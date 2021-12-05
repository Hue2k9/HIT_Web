let arr1=[1,2,3]
let arr2=[0]
let arr3=[9]
arr1=arr1.map(plusOne);
arr2=arr2.map(plusOne);
arr3=arr3.map(plusOne);

function plusOne(num){
    return num+1;
}
console.log(arr1);
console.log(arr2);
console.log(arr3);

