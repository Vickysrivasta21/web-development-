import { configureStore } from '@reduxjs/toolkit'
import  counterReducer  from './counter/counterslice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})