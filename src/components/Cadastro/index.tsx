import { useState } from 'react'
import * as S from './style'

type Props = {
  nomeContato: string
  emailContato: string
  phoneContato: string
}

const NovoCadastro = ({ nomeContato, emailContato, phoneContato }: Props) => {
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
            <S.CancelButton type="button">Remover</S.CancelButton>
          </>
        )}
      </S.Formulario>
    </main>
  )
}

export default NovoCadastro
