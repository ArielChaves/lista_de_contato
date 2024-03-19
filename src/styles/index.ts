import styled, { createGlobalStyle } from 'styled-components'

/*--------------------------------------------------------*/
/*                   INICIALIZANDO                        */
/*--------------------------------------------------------*/

/***Zerando toda estilização ---------------------------- */

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
  color: var(--font-color-grafit);
  /* background: #B3D0D3; */
  padding-top: 100px;

  width: 100%;
  display: grid;
  place-items: center;
  align-items: center;
  justify-content: center;
`

export default EstiloGlobal
