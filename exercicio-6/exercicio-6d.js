// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];
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
