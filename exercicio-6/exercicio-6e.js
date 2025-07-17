const students = require("./exercicio-6c");

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
