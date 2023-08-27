const form = document.getElementById("form-registration")

const salvarMatriculaNoLocalStorage = (matricula) => {
  const db = JSON.parse(localStorage.getItem("alunos")) || []

  const aluno = {
    id: db.length + 1,
    matricula: matricula,
  }

  db.push(aluno)

  localStorage.setItem("alunos", JSON.stringify(db))
  alert("Você foi cadastrado no sistema com sucesso!")
  window.location.href = "index.html"
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const matricula = document.getElementById("matricula-create").value

  if (matricula.trim() === "") {
    alert("Por favor digite sua mátricula para ser cadastrado no sistema!")
    return
  }

  if (matricula.length < 7) {
    alert(
      "Número de mátricula insuficiente, sua mátricula deve conter no mínimo 7 números!"
    )
    return
  }

  salvarMatriculaNoLocalStorage(matricula)
})
