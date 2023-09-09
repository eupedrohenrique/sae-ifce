import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import { SectionCadastro } from "../components/Section"
import Footer from "../components/Footer"

const CadastroContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1fr 0.2fr;
  grid-template-areas: "header" "section" "footer";
  place-content: center;
`

function Cadastro() {
  return (
    <div>
      <CadastroContainer>
        <Header showText={true} />
        <SectionCadastro />
        <Footer />
      </CadastroContainer>
    </div>
  )
}

export default Cadastro
