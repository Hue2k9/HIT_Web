const tinh =(n)=>{
    let sum = 0;
    let count = 0;
    for (let i = 2; i <= n; i++) {
        count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0)
                count++;
        }
        if (count === 2)
            sum += i;
    }
    console.log(sum);
}
tinh(40);