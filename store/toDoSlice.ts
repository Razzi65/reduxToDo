import { createSlice, nanoid } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import ToDoType from '@/types/toDoType';

export const ToDoSlice = createSlice({
    name: 'counter',
    initialState: {ToDoArr:[] as ToDoType []},
    reducers: {
        addToDo:(state, action)=>{
            const newVar:ToDoType = {
                item:action.payload,
                id:nanoid()
            }  
            state.ToDoArr.push (
                newVar
            )      
            
            
        }
    }

})

export const {addToDo} = ToDoSlice.actions
export default ToDoSlice.reducer

