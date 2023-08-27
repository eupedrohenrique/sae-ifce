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

  if (userType === "aluno") {
    const db = JSON.parse(localStorage.getItem("alunos")) || []
    const alunoEncontrado = db.find((aluno) => aluno.matricula === matricula)

    if (alunoEncontrado) {
      // Redirecionar para home.html se o aluno for encontrado
      window.location.href = "home.html"
    } else {
      alert("Aluno não encontrado. Verifique a matrícula.")
    }
  } else if (userType === "coordenador") {
    // Lógica para coordenador (não incluída no exemplo)
  }
})
