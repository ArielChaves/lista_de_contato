import { configureStore } from '@reduxjs/toolkit'
import atividadesReducer from './reducers/atividades'

const store = configureStore({
  reducer: {
    atividade: atividadesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
