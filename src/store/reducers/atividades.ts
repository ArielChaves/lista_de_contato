import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

type AtividadeState = {
  itens: Tarefa[]
}

const initialState: AtividadeState = {
  itens: [
    {
      id: 1,
      nomeContato: 'Paulo Henrique',
      emailContato: 'ph@hotmail.com',
      phoneContato: '(99)99999-9999'
    },
    {
      id: 2,
      nomeContato: 'Andre Mattos',
      emailContato: 'amattos@hotmail.com',
      phoneContato: '(99)99999-9999'
    },
    {
      id: 3,
      nomeContato: 'Priscila Alcantra',
      emailContato: 'prisscila@hotmail.com',
      phoneContato: '(99)99999-9999'
    },
    {
      id: 4,
      nomeContato: 'Romero Brito',
      emailContato: 'Brito@outlook.com.br',
      phoneContato: '(99)99999-9999'
    }
  ]
}

const atividadesSlice = createSlice({
  name: 'atividades',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((atividade) => atividade.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (p) => p.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = atividadesSlice.actions
export default atividadesSlice.reducer
