import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import { SectionLogin } from "../components/Section"
import Footer from "../components/Footer"

const LoginPageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  min-width: 100vw;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1fr 0.2fr;
  grid-template-areas: "header" "section" "footer";
  place-content: center;
`

function LoginPage() {
  return (
    <div>
      <LoginPageContainer>
        <Header />
        <SectionLogin showInputsRadio={true} />
        <Footer />
      </LoginPageContainer>
    </div>
  )
}

export default LoginPage
