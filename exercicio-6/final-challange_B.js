// Desafio final - integrando todos os conceitos - Vinnie

// Dados dos alunos
const students = [
  { name: "João", age: 20, grades: [85, 90, 78] },
  { name: "Maria", age: 19, grades: [92, 95, 89] },
  { name: "Pedro", age: 21, grades: [70, 65, 80] },
  { name: "Ana", age: 18, grades: [60, 75, 68] },
  { name: "Carlos", age: 22, grades: [90, 88, 92] },
];

for (let i = 0; i < students.length; i++) {
  const student = students[i];
  let sum = 0;
  for (let j = 0; j < student.grades.length; j++) {
    sum += student.grades[j];
  }
  const media = sum / student.grades.length;
  const result = media >= 70 ? "aprovado(a)" : "reprovado(a)";
  console.log(`Aluno(a): ${student.name} foi ${result}.`);
}
