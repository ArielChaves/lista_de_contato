import { useSelector } from 'react-redux'
import NovoCadastro from '../../components/Cadastro'
import { RootReducer } from '../../store'
import * as S from './styles'

const ListaDeCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.atividade)
  return (
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
            <S.Button type="button">Cadastar</S.Button>
            <S.CancelButton type="button">Cancelar</S.CancelButton>
          </S.Formulario>
        </div>
        <ul>
          {itens.map((p) => (
            <li key={p.nomeContato}>
              <NovoCadastro
                id={p.id}
                nomeContato={p.nomeContato}
                emailContato={p.emailContato}
                phoneContato={p.phoneContato}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default ListaDeCadastro
