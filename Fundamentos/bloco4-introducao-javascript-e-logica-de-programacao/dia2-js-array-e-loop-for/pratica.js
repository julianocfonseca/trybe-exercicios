let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 1:

for (let numeros of numbers) {
    console.log(numeros)
}

// Exercício 2:

let soma = 0;

for (let index = 0;index < numbers.length;index += 1) {
  soma += numbers[index]; 
}

console.log(soma);

// Exercício 3:

let media = soma/numbers.length

console.log(media);

// Exercício 4:

if (media > 20) {
    console.log('valor maior que 20')
} else {console.log('valor menor ou igual a 20')}

// Exercício 5:

let maiorValor = numbers[0];

for (let index = 0;index < numbers.length;index += 1) {
    if (numbers[index] > maiorValor) {
        maiorValor = numbers[index];
    }
}

console.log(maiorValor);

// Exercício 6:

let valoresImpares = 0;

for (let index = 0;index < numbers.length;index += 1) {
    if (numbers[index] % 2 !== 0) {
        valoresImpares += 1;
    } else if (valoresImpares === 0) {
        console.log('nenhum valor ímpar encontrado');
    }
}    

console.log(valoresImpares);

// Exercício 7:

let menorValor = numbers[0];

for (let index = 0;index < numbers.length;index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);