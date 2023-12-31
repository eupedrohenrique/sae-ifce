import React from "react"
import styled from "styled-components"
import Logo from "../img/logo-ifce.png"

const Img = styled.img`
  width: 200px;
  height: 120px;
  cursor: pointer;

  @media (min-width: 1400px) {
    width: 300px;
    height: 220px;
  }
`

const HeaderContainer = styled.header`
  text-align: center;
  grid-area: header;
`

const LogoContainer = styled.div`
  margin-top: 1.6rem;
`

const Title = styled.h1`
  font-weight: 700;
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.text},
    #ffffff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 488px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1400px) {
    font-size: 2.8rem;
  }
`

const Subtitle = styled.p`
  background: linear-gradient(
    to top,
    ${({ theme }) => theme.colors.text},
    #ffffff
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: ${({ theme }) => theme.fonts.primary};
`

export function Header({ showText = false }) {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Img src={Logo} alt="Logo do IFCE" />
      </LogoContainer>
      <Title>Portal do Comércio do IFCE Campus Baturité</Title>
      {showText && (
        <Subtitle>
          Informe a sua matrícula para ser cadastrado no sistema para que
          possamos completar seu cadastro.
        </Subtitle>
      )}
    </HeaderContainer>
  )
}
