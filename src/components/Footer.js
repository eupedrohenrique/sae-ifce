import React from "react"
import styled from "styled-components"

const FooterContainer = styled.footer`
  grid-area: footer;
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
`

const FooterParagraph = styled.p`
  font-size: 0.7rem;
  text-align-last: center;
  font-family: ${({ theme }) => theme.fonts.primary};

  @media (min-width: 1400px) {
    font-size: 1rem;
  }
`

function Footer() {
  return (
    <FooterContainer>
      <FooterParagraph>
        © 2023 IFCE - Instituto Federal de Educação, Ciência e Tecnologia do
        Ceará
      </FooterParagraph>
    </FooterContainer>
  )
}

export default Footer
