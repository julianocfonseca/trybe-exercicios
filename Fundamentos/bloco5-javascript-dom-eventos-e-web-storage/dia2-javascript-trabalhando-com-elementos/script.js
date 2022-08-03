// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body;

const titulo = document.createElement('h1');
titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
document.getElementsByTagName('body')[0].appendChild(titulo);

// Adicione a tag main com a classe main-content como filho da tag body;

const main = document.createElement('main');
main.className = 'main-content';
document.getElementsByTagName('body')[0].appendChild(main);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const section = document.createElement('section');
section.className = 'center-content';
document.getElementsByTagName('main')[0].appendChild(section);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragraph = document.createElement('p');
paragraph.innerText = 'Algum texto.';
document.getElementsByTagName('section')[0].appendChild(paragraph);