const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {
    return oddsAndEvens.sort(function(a, b){return a - b})
};

console.log(`Os números ${sortOddsAndEvens()} se encontram ordenados de forma crescente!`);