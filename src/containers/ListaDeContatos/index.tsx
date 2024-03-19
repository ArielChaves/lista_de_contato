import Contato from '../Contatos'
import * as S from './styles'
import { Button, CancelButton, Container } from './styles'

const ListaDeContatos = () => (
  <Container>
    <h3>Contatos</h3>
    <S.InputSearch type="text" placeholder="Buscar ...." />
    <S.Form>
      <S.Input type="text" placeholder="Nome do contato" />
      <S.Input type="tel" placeholder="(81) 9 9999-9999" />
      <Button type="submit">Adicionar</Button>
      <CancelButton type="button">Cancelar</CancelButton>
    </S.Form>
    <ul>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
      <li>
        <Contato />
      </li>
    </ul>
  </Container>
)

export default ListaDeContatos
