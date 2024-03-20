import styled from 'styled-components'

export const Card = styled.div`
  /* background-color: #dcdde1; */
  top: 40px;
`
export const ContainerMaster = styled.div`
  /* margin-top: 50px; */
`
// disposição do meu formulario em linha
export const Formulario = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 3px;
`
// estilo do meu botão principal de adicionar
export const Button = styled.button`
  background: #ff7402;
  color: #ffffff;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 9px;
  width: 78px; /* Defina o tamanho fixo desejado */
  height: 35px; /* Defina a altura fixa desejada */

  &:hover {
    background: #ffa500;
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
export const InputNomeRegistrado = styled.input`
  padding: 8px;
  border: none;
  border-bottom: 1px solid #ccc;
  /* border-radius: 4px; */
  line-height: 15px;
  font-family: 'Roboto Mono', monospace;
  width: 300px;
`
// Agora passando uma herança dentro do styled ()
// Aqui está recebendo por herança as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputTelefoneRegistrado = styled(InputNomeRegistrado)`
  width: 215px;
`
// Aqui está recebendo por herança as informações do (InputNomeRegistrado) e adiciono um espacamento e margin
export const InputEmailRegistrado = styled(InputNomeRegistrado)`
  width: 300px;
`
