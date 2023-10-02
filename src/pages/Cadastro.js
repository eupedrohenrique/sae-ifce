import React from "react"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { SectionCadastro } from "../components/Section"
import { Footer } from "../components/Footer"

export function Cadastro() {
  return (
    <div>
      <Container>
        <Header showText={true} />
        <SectionCadastro />
        <Footer />
      </Container>
    </div>
  )
}
