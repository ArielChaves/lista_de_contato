import styled, { createGlobalStyle } from 'styled-components'

/*** Zerando toda estilização ***/
const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }
`

export const Container = styled.div`
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  padding-top: 10px;

  max-width: 800px;
  margin: 0 auto;

  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
`
export default EstiloGlobal
