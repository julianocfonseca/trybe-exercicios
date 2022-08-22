const fatorial = (num, result = 1) => (num <= 1) ? `Este é o fatorial: ${result}` : fatorial(num-1, result*num);

console.log(fatorial(5));



