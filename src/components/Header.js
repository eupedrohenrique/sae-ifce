import React from "react"
import styled from "styled-components"

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
  transition: all 0.3s ease-in-out;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (max-width: 488px) {
    font-size: 1.5rem;
  }

  @media (min-width: 1400px) {
    font-size: 2.8rem;
  }
`

function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Img
          src="https://i.ibb.co/X8g7JzH/logo-ifce.png"
          alt="Imagem do IFCE"
        />
      </LogoContainer>
      <Title>Portal do Comércio do IFCE Campus Baturité</Title>
    </HeaderContainer>
  )
}

export default Header
