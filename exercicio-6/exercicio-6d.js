const students = require("./exercicio-6c");

//d) Encontre o aluno com a maior média

//verificacao de media
let medias = 0;
let alunos = [];

const media_aluno = students.map((elem) => {
  medias = Math.round((elem.grades[0] + elem.grades[1] + elem.grades[2]) / 3);
  alunos.push(elem.name);
  console.log("aluno: ", elem.name, "- media:", medias);
  return medias;
});

let posicao = media_aluno.indexOf(Math.max(...media_aluno));

console.log(
  "\nA maior media eh",
  Math.max(...media_aluno),
  "de",
  alunos[posicao]
);
