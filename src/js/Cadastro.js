const form = document.getElementById("form-registration")

const salvarCadastroNoLocalStorage = (matricula, nome) => {
  const db = JSON.parse(localStorage.getItem("alunos")) || []

  // Verificar se a matrícula já está cadastrada
  const matriculaExistente = db.find((aluno) => aluno.matricula === matricula)
  if (matriculaExistente) {
    alert("Essa matrícula já está cadastrada no sistema!")
    return
  }

  const aluno = {
    id: db.length + 1,
    matricula: matricula,
    nome: nome, // Salva o nome também
  }

  db.push(aluno)

  localStorage.setItem("alunos", JSON.stringify(db))
  alert("Você foi cadastrado no sistema com sucesso!")
  window.location.href = "index.html"
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const matricula = document.getElementById("matricula-create").value
  const nome = document.getElementById("nome-create").value // Pega o valor do campo nome

  if (matricula.trim() === "") {
    alert("Por favor, digite sua matrícula para ser cadastrado no sistema!")
    return
  }

  if (matricula.length < 7) {
    alert(
      "Número de matrícula insuficiente, sua matrícula deve conter no mínimo 7 números!"
    )
    return
  }

  if (nome.trim() === "") {
    alert("Por favor, digite seu nome!")
    return
  }

  salvarCadastroNoLocalStorage(matricula, nome)
})
