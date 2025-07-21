// Dados de alunos - Bianca
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];
//c)Conte quantos alunos foram aprovados e quantos foram reprovados

//verificacao de media
let media = 0,
  apro = 0,
  repro = 0;

students.forEach((ele) => {
  media = Math.round((ele.grades[0] + ele.grades[1] + ele.grades[2]) / 3);
  //contador de media
  if (media >= 70) {
    apro += 1;
  } else {
    repro += 1;
  }
});

console.log("Lista de Quantidade de alunos:");
console.log("Aprovados:", apro, "\nReprovados:", repro);
