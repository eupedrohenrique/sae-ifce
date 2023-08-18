const formSignIn = document.getElementById("form-sign-in")
const matriculaInput = document.getElementById("matricula")

formSignIn.addEventListener("click", (event) => {
  if (event.target.type === "radio") {
    if (event.target.id === "aluno") {
      matriculaInput.type = "number"
      matriculaInput.placeholder = "Matrícula"
    } else if (event.target.id === "coordenador") {
      matriculaInput.type = "email"
      matriculaInput.placeholder = "E-mail"
    }
  }
})
