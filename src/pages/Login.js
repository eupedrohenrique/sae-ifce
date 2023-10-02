import React from "react"
import { Container } from "../components/Container"
import { Header } from "../components/Header"
import { SectionLogin } from "../components/Section"
import { Footer } from "../components/Footer"

export function Login() {
  return (
    <div>
      <Container>
        <Header />
        <SectionLogin showInputsRadio={true} />
        <Footer />
      </Container>
    </div>
  )
}
