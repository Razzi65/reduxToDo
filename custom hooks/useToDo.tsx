import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import ToDoType from "@/types/toDoType"
import { addToDo } from "@/store/toDoSlice"



const UseToDo = () => {

    const [events, setEvents] = useState<string>("")

    const data = useSelector((store:any)=>store.ToDoSlice.ToDoArr)
    const dispatch = useDispatch()


    const onClickHandler = () => {
        dispatch(addToDo(events))
        console.log(data)
    }

    const onDelHandler = () => {
        
    }
  


    return {
        events, setEvents, onClickHandler, data, onDelHandler
    }

}

export default UseToDo