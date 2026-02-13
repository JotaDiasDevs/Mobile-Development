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

console.log(" ");

let nota = 8.5;//aprovado
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}   

nota = 6.0;//recuperação
if (nota >= 7) {
    console.log("Aprovado");    
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

nota = 4.0;//reprovado
if (nota >= 7) {
    console.log("Aprovado");    
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

console.log(" ");

let diaSemana = 4; 

switch (diaSemana) {
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("Dia inválido.");
}

console.log(" ");


console.log("Situação A: Números pares de 0 a 10");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log("Situação B: Alunos com índice");
let alunos = ["Ana", "Bruno", "Clara", "Diego"];
for (let i = 0; i < alunos.length; i++) {
    console.log(i + ": " + alunos[i]);
}

console.log(" ");


console.log("Contagem regressiva de foguete");
let contagem = 10;
while (contagem >= 1) {
    console.log(contagem);
    contagem--;
}
console.log("🚀 Lançamento!");

console.log(" ");


function calcularArea(base, altura) {
    return base * altura / 2;
}


const calcularAreaArrow = (base, altura) => base * altura / 2;


function cumprimentar(nome, periodo) {
    return "Boa " + periodo + ", " + nome + "!";
}


const cumprimentarArrow = (nome, periodo) => "Boa " + periodo + ", " + nome + "!";


console.log("Teste Função A (tradicional):");
console.log(calcularArea(10, 8)); // Esperado: 40

console.log("Teste Função A (arrow):");
console.log(calcularAreaArrow(10, 8)); // Esperado: 40

console.log("Teste Função B (tradicional):");
console.log(cumprimentar("João", "manhã")); // Esperado: "Boa manhã, João!"

console.log("Teste Função B (arrow):");
console.log(cumprimentarArrow("Maria", "noite")); // Esperado: "Boa noite, Maria!"