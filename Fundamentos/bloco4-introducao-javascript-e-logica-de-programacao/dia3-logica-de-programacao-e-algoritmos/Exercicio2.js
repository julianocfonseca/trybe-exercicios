let word = 'tryber';
let invertida = '';
for (let index = word.length-1;index >= 0 ;index -= 1) {
    invertida = invertida + word[index];
}

console.log(invertida);