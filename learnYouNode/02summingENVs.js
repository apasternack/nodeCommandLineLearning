const sum = process.argv.filter((res, i) => i > 1)
                        .reduce((a, b) => +a + +b);

console.log(sum);
