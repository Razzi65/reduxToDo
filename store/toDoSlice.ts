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
            
            
        },

    onDel: (state, action) => {
        console.log(action.payload.id);
        let filteredArr = state.ToDoArr.filter((newitem)=>newitem.id!=action.payload.id)
        
        let newState = {
            ...state,
            ToDoArr:filteredArr
        }
        return newState

    },

    onUpdate: (state, action)=> {

    }



}}
)

export const {addToDo, onDel, onUpdate} = ToDoSlice.actions
export default ToDoSlice.reducer

