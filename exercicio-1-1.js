console.log("Olá, sou o João Victor Semente Dias.");
console.log("Estou cursando Análise e Desenvolvimento de Sistemas na FIAP.");
console.log("Estou aprendendo JavaScript!");

console.log(" ");

console.log( 100 / 4 );
console.log( 7 * 7 );
console.log( 17 % 5);

console.log(" ");

const nomeJogador ="Ana";
let pontuacao = 0;
console.log("O nome do jogador é " + nomeJogador + " e sua pontuação é " + pontuacao + ".");
pontuacao += 10;
console.log("O nome do jogador é " + nomeJogador + " e sua pontuação é " + pontuacao + ".");

console.log(" ");

const nome = "João";
let idade = 20;
const masculino = true;
let altura;

console.log(" A variável nome é do tipo " + typeof nome);
console.log(" A variável idade é do tipo " + typeof idade);
console.log(" A variável masculino é do tipo " + typeof masculino);
console.log(" A variável altura é do tipo " + typeof altura);

console.log(" ");

let enderecoEntrega = null;
let numeroPedido;

console.log(" Endereço de entrega: " + enderecoEntrega);
console.log(" Número do pedido: " + numeroPedido);

enderecoEntrega = "Rua das Flores, 123";
numeroPedido = 456;

console.log(" Endereço de entrega: " + enderecoEntrega);
console.log(" Número do pedido: " + numeroPedido);

console.log(" ");

const aluno = {
    nome: "Marcos",
    matricula: 750001,
}

console.log(" O nome do aluno é " + aluno.nome);
console.log(" A matrícula do aluno é " + aluno.matricula);  
console.log(" A nota do aluno é " + aluno.nota);

aluno.nota = 9.0;

console.log(" O nome do aluno é " + aluno.nome);
console.log(" A matrícula do aluno é " + aluno.matricula);  
console.log(" A nota do aluno é " + aluno.nota);

console.log(" ");

let tarefas = ["Arrumar a cama", "Escovar os dentes", "Tomar banho"];
console.log(tarefas[0]);
console.log(tarefas[2]);
console.log(tarefas.length);
tarefas.push("Vestir-se");
console.log(tarefas.length);

console.log(" ");

let veiculo = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2020,
    disponivel: true,
}

console.log(veiculo.marca);
console.log(veiculo.modelo);
console.log(veiculo["ano"]);
console.log(veiculo["disponivel"]);
veiculo.cor = "Preto";
console.log(veiculo.cor);