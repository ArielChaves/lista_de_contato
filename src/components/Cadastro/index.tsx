import { useState } from 'react'
import { useDispatch } from 'react-redux'

import NovoCadastroClass from '../../models/Tarefa'
import { remover } from '../../store/reducers/atividades'
import * as S from './style'

type Props = NovoCadastroClass

const NovoCadastro = ({
  nomeContato,
  emailContato,
  phoneContato,
  id
}: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <main>
      <S.Formulario>
        <S.InputNomeRegistrado
          type="text"
          placeholder="Nome completo"
          value={nomeContato}
        />
        <S.InputEmailRegistrado
          type="email"
          placeholder="E-mail"
          value={emailContato}
        />
        <S.InputTelefoneRegistrado
          type="tel"
          placeholder="(99) 9 9999-9999"
          value={phoneContato}
        />
        {estaEditando ? (
          <>
            <S.ButtonSalvar type="button">Salvar</S.ButtonSalvar>
            <S.CancelButton
              type="button"
              onClick={() => setEstaEditando(false)}
            >
              Cancelar
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Button type="button" onClick={() => setEstaEditando(true)}>
              Editar
            </S.Button>
            <S.CancelButton type="button" onClick={() => dispatch(remover(id))}>
              Remover
            </S.CancelButton>
          </>
        )}
      </S.Formulario>
    </main>
  )
}

export default NovoCadastro
