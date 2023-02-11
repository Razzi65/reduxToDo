import { configureStore } from '@reduxjs/toolkit'
import ToDoSlice from './toDoSlice'

export const store = configureStore({
    reducer: {
        ToDoSlice
    }

})