const nota = 97;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
}
else if (nota < 80 && nota >= 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovada(o)")
}


let estado = 'aprovado';

switch (estado) {
    case "aprovado":
        console.log("aprovado");
        break;
    case "lista":
        console.log("lista");
        break;
    case "reprovado":
        console.log("reprovado");
        break;
    default:
        console.log("não se aplica");              
}