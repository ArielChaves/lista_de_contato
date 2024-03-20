import { useDispatch, useSelector } from 'react-redux'
import NovoCadastro from '../../components/Cadastro'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/Filtro'
import * as S from './styles'

const ListaDeCadastro = () => {
  const { itens } = useSelector((state: RootReducer) => state.atividade)
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  const dispatch = useDispatch()

  const filtraContato = () => {
    return itens.filter(
      (item) => item.nomeContato.toLowerCase().search(termo.toLowerCase()) >= 0
    )
  }

  return (
    <main>
      <div>
        <p>Lista de contatos em react</p>
        <div>
          <S.InputSearch
            type="text"
            placeholder="Localizar contato ...."
            value={termo}
            onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
          />
        </div>
        <div>
          <S.Formulario>
            <S.InputNome type="text" placeholder="Nome completo" />
            <S.InputEmail type="email" placeholder="E-mail" />
            <S.InputTelefone type="Tel" placeholder="(99) 9 9999-9999" />
            <S.Button type="button">Salvar</S.Button>
            <S.CancelButton type="button">Cancelar</S.CancelButton>
          </S.Formulario>
        </div>
        <ul>
          {filtraContato().map((p) => (
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
