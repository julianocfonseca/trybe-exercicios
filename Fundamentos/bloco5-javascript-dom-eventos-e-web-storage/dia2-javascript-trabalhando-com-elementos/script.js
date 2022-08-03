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

// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.

let element = document.createElement('h3');
document.getElementsByTagName('main')[0].appendChild(element);
document.getElementsByTagName('main')[0].appendChild(element);
document.getElementsByTagName('main')[0].appendChild(element);

// Adicione a classe title na tag h1 criada;

element = document.getElementsByTagName('h1')[0];
element.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;

element = document.getElementsByTagName('h3');
for (let index in element) {
    element[index].className = 'description';
}

// Remova a section criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

element = document.getElementsByTagName('main')[0];
let deletion = element.firstChild.nextSibling;
element.removeChild(deletion);

// Centralize a section criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto da section;

element = document.getElementsByClassName('right-content')[0];
element.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

element = document.getElementsByClassName('center-content')[0].parentElement;
element.style.background = 'pink';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

element = document.querySelector('.right-content ul');
deletion = element.lastChild;
element.removeChild(deletion);
deletion = element.lastChild;
element.removeChild(deletion);

