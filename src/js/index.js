// Isso garantirá que os emails de coordenadores estejam disponíveis no localStorage quando o usuário carregar a página
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
      // Armazena o email válido do aluno no localStorage
      localStorage.setItem("validAlunoMatricula", inputEmail)

      // Redirecionar para home.html se o aluno for encontrado
      window.location.href = "pagina_de_acesso_do_aluno.html"
    } else {
      alert("Aluno não encontrado. Verifique a matrícula.")
    }
  } else if (userType === "coordenador") {
    const coordenadores =
      JSON.parse(localStorage.getItem("coordenadores")) || []

    if (coordenadores.includes(inputEmail)) {
      // Armazena o email válido do coordenador no localStorage
      localStorage.setItem("validCoordEmail", inputEmail)

      // Redireciona para a página de acesso do coordenador
      window.location.href = "pagina_de_acesso_do_coordenador.html"
    } else {
      alert("Email inválido para coordenador.")
    }
  }
})
