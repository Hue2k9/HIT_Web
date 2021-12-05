const run = (digits) => {
    let res = "";
    digits.forEach(item => {
        res += item.toString();
    })
    let number = parseInt(res);
    number += 1;
    res = number.toString();
    let arr = [];
    for(let i of res) {
        arr.push(parseInt(i));
    }
    return arr;
    
}

const digits = [1,2,3]
console.log(run(digits));
 
const digits2 = [0]
console.log(run(digits2));

const digits3 = [9]
console.log(run(digits3));