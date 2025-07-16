// a) Crie um sistema de classificação de notas:
// 0-59: F 
// 60-69: D 
// 70-79: C 
// 80-89: B 
// 90-100: A

//notas para gerar a média
const array = [70,90,85];

console.log(mediaAluno(array));

function mediaAluno(notas) {
    const media = calcularMedia(notas);
    
    if (media < 59) return "F";
    if (media < 69) return "D";
    if (media < 79) return "C";
    if (media < 89) return "B";
    return "A"
}

function calcularMedia(array) {
    let sum = 0;
    for (let valor of array) {
        sum += valor;
    } 
    return sum/(array.length);
}

