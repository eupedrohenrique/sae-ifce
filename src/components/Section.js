import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"

const SectionContainer = styled.section`
  grid-area: section;
  display: flex;
  justify-content: center;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.3rem;
`

const InputsRadioWrapper = styled.div`
  display: flex;
  gap: 2.5rem;
`

const InputWrapper = styled.div`
  width: 300px;

  @media (min-width: 1400px) {
    width: 588px;
  }
`

const Label = styled.label`
  font-size: 1.3rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fonts.primary};
  margin-left: 0.7rem;

  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`

const InputText = styled.input`
  padding: 0.2rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};
  border: 2px solid #000000;
  border-radius: 6px;
  outline: none;
  color: #000000;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.input};
  font-size: 1.2rem;
  width: 100%;

  &:focus {
    background-color: ${({ theme }) => theme.colors.link};
  }

  &::placeholder {
    text-align: center;
    color: #00000078;
    font-size: 1rem;
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  @media (min-width: 1400px) {
    font-size: 2rem;

    &::placeholder {
      font-size: 2rem;
    }
  }
`

const BtnWrapper = styled.div`
  width: 300px;

  @media (min-width: 1400px) {
    width: 588px;
  }
`

const Btn = styled.button`
  border: 2px solid #000000;
  background-color: ${({ theme }) => theme.colors.btn};
  font-weight: 500;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  font-size: 1.2rem;
  width: 100%;
  padding: 0.2rem 0;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnHover};
    color: #000000;
  }

  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`

const Text = styled.p`
  color: ${({ theme }) => theme.colors.link};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.link};
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 1400px) {
    font-size: 2rem;
  }
`

export function SectionLogin() {
  return (
    <SectionContainer>
      <Form>
        <InputsRadioWrapper>
          <div>
            <input type="radio" name="user" id="aluno" defaultChecked />
            <Label htmlFor="aluno">Aluno</Label>
          </div>
          <div>
            <input type="radio" name="user" id="coordenador" />
            <Label htmlFor="coordenador">Coordenador</Label>
          </div>
        </InputsRadioWrapper>
        <InputWrapper>
          <label htmlFor="matricula" className="hidden">
            Mátricula
          </label>
          <InputText
            type="number"
            name="matricula"
            id="matricula"
            placeholder="Mátricula"
          />
        </InputWrapper>
        <BtnWrapper>
          <Btn type="submit">Entrar</Btn>
        </BtnWrapper>
        <div>
          <StyledLink to="/cadastro">Primeiro acesso</StyledLink>
        </div>
      </Form>
    </SectionContainer>
  )
}

export function SectionCadastro() {
  return (
    <SectionContainer>
      <Form>
        <InputWrapper>
          <label htmlFor="nome" className="hidden">
            Nome
          </label>
          <InputText
            type="text"
            name="nome"
            id="nome"
            placeholder="Digite seu Nome"
          />
        </InputWrapper>
        <InputWrapper>
          <label htmlFor="matricula" className="hidden">
            Mátricula
          </label>
          <InputText
            type="number"
            name="matricula"
            id="matricula"
            placeholder="Mátricula"
          />
        </InputWrapper>
        <BtnWrapper>
          <Btn type="submit">Cadastrar</Btn>
        </BtnWrapper>
        <div>
          <Text>
            Já tem uma conta ? <StyledLink to="/">Clique aqui</StyledLink>
          </Text>
        </div>
      </Form>
    </SectionContainer>
  )
}
