const alunoRadio = document.getElementById("aluno")
const coordenadorRadio = document.getElementById("coordenador")
const matriculaInput = document.getElementById("matricula")

alunoRadio.addEventListener("click", () => {
  matriculaInput.type = "number"
  matriculaInput.placeholder = "Matrícula"
})

coordenadorRadio.addEventListener("click", () => {
  matriculaInput.type = "email"
  matriculaInput.placeholder = "E-mail"
})
