const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

function count(arr){
    arr.sort();
    console.log(arr);
    let count=1;
    let vt=0;
    for(let i=0; i<arr.length; i++){
       if (arr[i+1]==arr[i] && vt==i)
           count++;
       if (arr[i+1]!=arr[i] && vt==i){
        console.log("So "+arr[i]+" xuat hien "+count+ " lan");
        count=1;
       }
       vt++;
    }
}
count(nums);
count(nums1);
count(nums2);
