/* console.log("Alohomora");

// Revisão

let nome = "Levi", idade = 21;

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); 

let suaIdade = prompt("Sua idade: ");

if (suaIdade >= 18){
    console.log("Pode entrar.");
}else{
    console.log("Acesso negado.");
}

// Revisão 2
function pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    return console.log(`Olá ${nome}, você tem ${idade} anos. Seja bem-vindo!`);
}

let nome = prompt("Digite seu nome: ");
let idade = prompt("Digite sua idade: ");

pessoa(nome, idade);

*/

//Function Arrow

const potencia = (numero) => {
    return numero * numero;
}

/*function potencia (numero){
    return numero * numero;
}*/

console.log(potencia(3));
