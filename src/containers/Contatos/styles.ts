import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fcfcfc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
`

export const InputNome = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  /* border-radius: 4px; */
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
`

export const InputTelefone = styled(InputNome)``

export const BotaoEditar = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-left: 8px;
`

export const BotaoExcluir = styled(BotaoEditar)`
  background-color: #dc3545;
  margin-left: 0;
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 46% 23% 14% 14%;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-bottom: 5px;
`

export const Botao = styled.button``
