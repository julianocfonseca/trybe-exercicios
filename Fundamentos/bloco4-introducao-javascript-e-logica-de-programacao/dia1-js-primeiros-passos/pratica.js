// Exercício 1:
const a = 7;
const b = 9;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Exercício 2:
const n1 = 6
const n2 = 4
const n3 = 8


if (n1 > n2) {
    console.log(n1)
}
else {
    console.log(n2)
}

// Exercício 3:
if (n1 > n2 && n1 > n3) {
    console.log(n1)
}
else if (n2 > n1 && n2 > n3) {
    console.log(n2)
}
else {
    console.log(n3)
}

// Exercício 4:
const valor = 9

if (valor > 0){
    console.log('positive')
}
else if (valor < 0){
    console.log('negative')
}
else {
    console.log('zero')
}

// Exercício 5:

let a1 = 50;
let a2 = 60;
let a3 = 70;

if (a1 + a2 + a3 === 180) {
    console.log('true')
} else {console.log('false')}

// Exercício 6:

let peça = 'QuEeN';
let result = peça.toLowerCase()

if (result === 'bishop') {
    console.log('moves diagonally')
} else if (result === 'queen') {
    console.log('any number of unoccupied squares in a straight line vertically, horizontally, or diagonally')
} else if (result === 'king') {
    console.log('can move only one square in any direction, whether it is forward, backward, or sideways')
} else if (result === 'pawn') {
    console.log('moves directly forward, never backward or to the side')
} else if (result === 'knight') {
    console.log('either moves up or down one square vertically and over two squares horizontally OR up or down two squares vertically and over one square horizontally')
} else if (result === 'rook') {
    console.log('move forward, backward or sideways, but cannot move diagonally')
}