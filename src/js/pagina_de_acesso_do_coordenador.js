document.addEventListener("DOMContentLoaded", () => {
  const coordenadores = JSON.parse(localStorage.getItem("coordenadores")) || []
  const storedEmail = localStorage.getItem("validCoordEmail")

  if (coordenadores.includes(storedEmail)) {
    const welcomeMessageElement = document.querySelector(
      "#mensagem-boas-vindas"
    )

    if (storedEmail === "jeffersongurguri@ifce.edu.br") {
      welcomeMessageElement.textContent = "Seja bem-vindo, Jefferson!"
    } else if (storedEmail === "paulovictor@ifce.edu.br") {
      welcomeMessageElement.textContent = "Seja bem-vindo, Paulo Victor!"
    }
  } else {
    window.location.href = "index.html"
  }
})
