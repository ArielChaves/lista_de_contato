import NovoCadastro from '../../components/Cadastro'
import * as S from './styles'

const ListaDeCadastro = () => (
  <main>
    <div>
      <p>Lista de contatos em react</p>
      <div>
        <S.InputSearch type="text" placeholder="Localizar contato ...." />
      </div>
      <div>
        <S.Formulario>
          <S.InputNome type="text" placeholder="Nome completo" />
          <S.InputEmail type="email" placeholder="E-mail" />
          <S.InputTelefone type="Tel" placeholder="(99) 9 9999-9999" />
          <S.Button>Cadastar</S.Button>
          <S.CancelButton>Cancelar</S.CancelButton>
        </S.Formulario>
      </div>
      <ul>
        <li>
          <NovoCadastro />
        </li>
        <li>
          <NovoCadastro />
        </li>
        <li>
          <NovoCadastro />
        </li>
        <li>
          <NovoCadastro />
        </li>
      </ul>
    </div>
  </main>
)

export default ListaDeCadastro
