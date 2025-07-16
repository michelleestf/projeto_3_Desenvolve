// Exercícios de manipulação de strings - Thalyta
// Extração do primeiro nome (Desafio A)

const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);


const primeiroNomeExtraido = fullName.slice(0, fullName.indexOf(" "));
console.log("Primeiro nome:", primeiroNomeExtraido);
