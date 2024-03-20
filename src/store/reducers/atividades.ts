import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

const atividadesSlice = createSlice({
  name: 'atividades',
  initialState: [
    new Tarefa('Maria Mercia', 'mmercia@gmail.com', '(88)98236-8874', 1),
    new Tarefa('Pedro Luiz', 'luizpp@gmail.com', '(85)98236-8874', 2),
    new Tarefa('Calors Antonio', 'toinho@gmail.com', '(87)98236-8874', 3),
    new Tarefa('Juarez Lampião', 'jzlampiao@gmail.com', '(87)98236-8874', 4)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((atividade) => atividade.id !== action.payload)
    }
  }
})
export const { remover } = atividadesSlice.actions
export default atividadesSlice.reducer
