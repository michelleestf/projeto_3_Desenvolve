// Exercícios de manipulação de strings - Thalyta
// Verificação da letra 'a' (Desafio B)
const firstName = "Maria";
const lastName = "Silva";
const fullName = firstName + " " + lastName;
console.log("Nome completo:", fullName);

const verificacao = fullName.toLowerCase().includes('a');
if(verificacao === true){
    console.log ("O nome contem a letra 'a'.");
}
else{
        console.log ("O nome não contem a letra 'a'.");
}