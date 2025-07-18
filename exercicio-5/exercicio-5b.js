// Exercicio 5 - b) Crie um array de números e calcule a soma deles usando um loop
const numeros = [5, 1, 8, 9, 7]; 
let soma = 0; 

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; 
}

console.log("A soma total dos números é:", soma);
