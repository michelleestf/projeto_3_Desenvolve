// Exercícios de operações matemáticas - Michelle
// Criando um loop que identifique o menor valor em um array de números

const numb = [20,40,45,2,8,70]
let menor = numb[0];
 for (let n = 1; n < numb.length;n++){
    if (numb[n]<menor){
        menor = numb[n];
    }
 }
 console.log("Menor Valor", menor)