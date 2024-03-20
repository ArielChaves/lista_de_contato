import styled from 'styled-components'

// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 3px;
  margin-bottom: 60px;
`
// estilo do meu botão principal de adicionar
export const Button = styled.button`
  background: #00a86b;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 100px;

  &:hover {
    background: #00cf83;
  }
`
// Aqui passo por herança no styled() os atributos do meu Botão e trato apenas o Hover para que não fique com o mesmo hover verde
export const CancelButton = styled(Button)`
  background-color: #dc3545;
  &:hover {
    background: #e57373;
  }
`
// Aqui estou definindo um regra geral para os inputs
export const InputNome = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 100%;
`
// Agora passando uma herança dentro do styled ()
// Aqui está recebendo por herança as informações do (InputNome) e adiciono um espacamento e margin
export const InputSearch = styled(InputNome)`
  width: 100%;
  margin-top: 8px;
  background-color: #353b48;
  color: #f5f6fa;
`
// Aqui está recebendo por herança as informações do (InputNome) e adiciono um espacamento e margin
export const InputTelefone = styled(InputNome)`
  width: 70%;
`
// Aqui está recebendo por herança as informações do (InputNome) e adiciono um espacamento e margin
export const InputEmail = styled(InputNome)`
  width: 100%;
`
