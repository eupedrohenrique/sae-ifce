document.addEventListener("DOMContentLoaded", () => {
  const alunos = JSON.parse(localStorage.getItem("alunos")) || []
  const storedMatricula = localStorage.getItem("validAlunoMatricula")

  const alunoEncontrado = alunos.find(
    (aluno) => aluno.matricula === storedMatricula
  )

  if (alunoEncontrado) {
    const welcomeMessageElement = document.querySelector(
      "#mensagem-boas-vindas"
    )
    welcomeMessageElement.textContent = `Seja bem-vindo, ${alunoEncontrado.nome}!`
  } else {
    window.location.href = "index.html"
  }
})
