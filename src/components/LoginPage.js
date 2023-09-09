import React from "react"
import styled from "styled-components"
import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"

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
        <Section />
        <Footer />
      </LoginPageContainer>
    </div>
  )
}

export default LoginPage
