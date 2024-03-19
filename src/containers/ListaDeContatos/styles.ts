import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;

  /* Ajustar o título */
  h3 {
    font-weight: bold;
    margin: 16px auto;
  }
`

export const Form = styled.form`
  display: grid;
  grid-template-columns: 2fr 1fr auto auto;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`

export const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-left: 8px;
`

export const CancelButton = styled(Button)`
  background-color: #dc3545;
  margin-left: 0;
`
