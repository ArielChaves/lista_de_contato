import * as S from './style'

const NovoCadastro = () => (
  <main>
    <S.ContainerMaster>
      <S.Card>
        <S.Formulario>
          <S.InputNomeRegistrado type="text" placeholder="Nome completo" />
          <S.InputEmailRegistrado type="email" placeholder="E-mail" />
          <S.InputTelefoneRegistrado
            type="Tel"
            placeholder="(99) 9 9999-9999"
          />
          <S.Button>Editar</S.Button>
          <S.CancelButton>Remover</S.CancelButton>
        </S.Formulario>
      </S.Card>
    </S.ContainerMaster>
  </main>
)

export default NovoCadastro
