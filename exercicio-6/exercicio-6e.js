// Dados de alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

//e) Calcule a média geral da turma

//verificacao de media
let soma_medias = 0;

students.forEach((elem) => {
  const media = Math.round(
    (elem.grades[0] + elem.grades[1] + elem.grades[2]) / 3
  );

  soma_medias = soma_medias + media;
});

const media_geral = soma_medias / students.length;

console.log("A media geral eh", media_geral);
