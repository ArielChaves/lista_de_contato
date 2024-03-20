import NovoCadastro from '../../components/Cadastro'
import * as S from './styles'

const person = [
  {
    nomeContato: 'Augusto Cedric',
    emailContato: 'cedric.pmi.rmp@gmail.com',
    phoneContato: '(81) 9 8198-5882'
  },
  {
    nomeContato: 'Paulo Cezar',
    emailContato: 'PC@gmail.com',
    phoneContato: '(81) 9 8898-6498'
  },
  {
    nomeContato: 'Ana Carla',
    emailContato: 'anacarlabeltrao@gmail.com',
    phoneContato: '(83) 9 8178-8825'
  }
]

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
          <S.Button type="button">Cadastar</S.Button>
          <S.CancelButton type="button">Cancelar</S.CancelButton>
        </S.Formulario>
      </div>
      <ul>
        {person.map((p) => (
          <li key={p.nomeContato}>
            <NovoCadastro
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

export default ListaDeCadastro
