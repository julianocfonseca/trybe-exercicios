// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const title = document.createElement('h1');
title.innerText = 'Exercício 5.2 - JavaScript DOM';
document.getElementsByTagName('body')[0].appendChild(title);

// Adicione a tag main com a classe main-content como filho da tag body;

const main = document.createElement('main');
main.className = 'main-content';
document.getElementsByTagName('body')[0].appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const section1 = document.createElement('section');
section1.className = 'center-content';
document.getElementsByTagName('main')[0].appendChild(section1);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerText = 'Algum texto.';
document.getElementsByTagName('section')[0].appendChild(paragraph);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const section2 = document.createElement('section');
section2.className = 'left-content';
document.getElementsByTagName('main')[0].appendChild(section2);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const section3 = document.createElement('section');
section3.className = 'right-content';
document.getElementsByTagName('main')[0].appendChild(section3);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const img = document.createElement('img');
img.src = "https://picsum.photos/200";
img.className = "small-image";
document.querySelector('.left-content').appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const list = document.createElement('ul');
document.querySelector('.right-content').appendChild(list);

let createLi = document.createElement('li');
createLi.innerText = "um";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "dois";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "três";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "quatro";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "cinco";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "seis";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "sete";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "oito";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "nove";
document.querySelector('.right-content ul').appendChild(createLi);
createLi = document.createElement('li');
createLi.innerText = "dez";
document.querySelector('.right-content ul').appendChild(createLi);

