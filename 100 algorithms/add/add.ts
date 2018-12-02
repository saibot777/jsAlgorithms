function add(...params: number[]): number {
    let total = 0;

    params.forEach(num => {
        total += num;
    });

    return total;
}

console.log(add(1,2,3,4,5));
console.log(add(2,3));

