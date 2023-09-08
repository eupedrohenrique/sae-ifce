document.addEventListener("DOMContentLoaded", () => {
  const coordenadores = [
    "jeffersongurguri@ifce.edu.br",
    "paulovictor@ifce.edu.br",
  ]

  localStorage.setItem("coordenadores", JSON.stringify(coordenadores))
})

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

formSignIn.addEventListener("submit", (event) => {
  event.preventDefault()

  const userType = document.querySelector("input[name='user']:checked").id
  const matricula = matriculaInput.value
  const inputEmail = matriculaInput.value

  if (userType === "aluno") {
    const db = JSON.parse(localStorage.getItem("alunos")) || []
    const alunoEncontrado = db.find((aluno) => aluno.matricula === matricula)

    if (alunoEncontrado) {
      localStorage.setItem("validAlunoMatricula", inputEmail)
      window.location.href = "pagina_de_acesso_do_aluno.html"
    } else {
      alert("Aluno não encontrado. Verifique a matrícula.")
    }
  } else if (userType === "coordenador") {
    const coordenadores =
      JSON.parse(localStorage.getItem("coordenadores")) || []

    if (coordenadores.includes(inputEmail)) {
      localStorage.setItem("validCoordEmail", inputEmail)
      window.location.href = "pagina_de_acesso_do_coordenador.html"
    } else {
      alert("Email inválido para coordenador.")
    }
  }
})
