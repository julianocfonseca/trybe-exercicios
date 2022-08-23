// const fatorial = (num, result = 1) => (num <= 1) ? `Este é o fatorial: ${result}` : fatorial(num-1, result*num);

// console.log(fatorial(4));


const fatorial = (numero) => {
    let result = 1;
    if (numero <= 1) {
        return result;
    } else if (numero > 1) {
        for (let index = numero - 1; index >= 1; index -= 1) {
            numero = numero * index;
        }
        return numero;
    }
}

console.log(fatorial(5))


// function factorialize(num) {
//     // If num = 0 OR num = 1, the factorial will return 1
//     if (num === 0 || num === 1)
//       return 1;
  
//     // We start the FOR loop with i = 4
//     // We decrement i after each iteration 
//     for (let i = num - 1; i >= 1; i--) {
//       // We store the value of num at each iteration
//       num = num * i; // or num = i;
//     //   / 
//     //                   num      var i = num - 1       num = i         i--       i >= 1?
//     //   1st iteration:   5           4 = 5 - 1         20 = 5 4        3          yes
//     //   2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
//     //   3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes
//     //   4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no
//     //   5th iteration: 120               0                120
//     //   End of the FOR loop 
//     //   */
//     }
//     return num; //120
//   }
//   console.log(factorialize(5));