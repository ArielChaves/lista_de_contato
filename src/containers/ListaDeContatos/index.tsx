import * as S from './styles'

const ListaDeContatos = () => (
  <S.Container>
    <h3>Contatos</h3>
    <S.Form>
      <S.Input type="text" placeholder="Nome do contato" />
      <S.Input type="tel" placeholder="(81) 9 9999-9999" />
      <S.Button type="submit">Adicionar</S.Button>
      <S.CancelButton type="button">Cancelar</S.CancelButton>
    </S.Form>
    <ul></ul>
  </S.Container>
)

export default ListaDeContatos
