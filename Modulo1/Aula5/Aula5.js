const alunos = [
    {nome: "Carlos", idade: 15},
    {nome: "Julia", idade: 18},
    {nome: "Pedro", idade: 12},
    {nome: "Aline", idade: 23},
    {nome: "Joana", idade: 16},
    {nome: "Maisa", idade: 13}
];

const idadeMenorQue20 = alunos.filter((aluno) => aluno.idade < 18);
console.log(idadeMenorQue20);

const comecaComJ = alunos.filter((aluno) => aluno.nome[0] === "J");
console.log(comecaComJ);