import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import ToDoType from "@/types/toDoType"
import { addToDo, onDel, onUpdate } from "@/store/toDoSlice"



const UseToDo = () => {

    const [events, setEvents] = useState<string>("")
    const [isUpdate, setIsUpdate] = useState(false)

    const data = useSelector((store:any)=>store.ToDoSlice.ToDoArr)
    const dispatch = useDispatch()


    const onClickHandler = () => {
        dispatch(addToDo(events))
        setEvents("")
        console.log(data)
    }

    const onDelHandler = (items:ToDoType) => {
        dispatch(onDel(items))}
        
        
    const onUpdateHandler = (items:ToDoType) => {
        setIsUpdate(true)
        setEvents(items.item)  
        
    }
    
    const onEditHandler = () => {
        dispatch(onUpdate(events))
        setIsUpdate(false)
        console.log(events);
        
    }
        
        
  


    return {
        events, setEvents, onClickHandler, data, onDelHandler, isUpdate,
        onUpdateHandler, onEditHandler
    }

}

export default UseToDo