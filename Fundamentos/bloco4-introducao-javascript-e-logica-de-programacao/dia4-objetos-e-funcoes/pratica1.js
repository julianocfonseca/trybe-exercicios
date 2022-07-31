let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem-vinda,", info.personagem);

info.recorrente = "Sim";

for (let index in info) {
  console.log(index);
}

for (let index in info) {
  console.log(info[index]);
}

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dells Four Color Comix #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

for (let index in info) {
  if (index === "personagem") {
    console.log(info[index], "e", info2[index]);
  }
  if (index === "origem") {
    console.log(info[index], "e", info2[index]);
  }
  if (index === "nota") {
    console.log(info[index], "e", info2[index]);
  }
  if (index === "recorrente") {
    if (info.recorrente === "Sim" && info2.recorrente === "Sim") {
      console.log("Ambas recorrentes");
    } else {
      console.log(info[index]), "e", console.log(info2[index]);
    }
  }
}

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};

console.log(
  "O livro favorito de",
  leitor.nome,
  leitor.sobrenome,
  "se chama",
  leitor.livrosFavoritos[0].titulo
);

leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

console.log(
  leitor.nome,
  "tem",
  leitor.livrosFavoritos.length,
  "livros favoritos"
);
