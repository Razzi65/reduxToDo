import UseToDo from "@/custom hooks/useToDo"
import ToDoType from "@/types/toDoType"



const ToDo = () => {

    const {events, setEvents, onClickHandler, data, onDelHandler,isUpdate,onEditHandler,
        onUpdateHandler} = UseToDo()

   



    return(<>

    <input value={events} onChange={(e)=>setEvents(e.target.value)}  />
        { isUpdate==false?
    <button onClick={onClickHandler} > Add </button> :
    <button onClick={()=>onEditHandler()}  > update </button> 
    
        }<br/>
        

    {data.map((items:ToDoType)=> {
        return( <>
        <li>{items.item}  <button onClick={()=>onDelHandler(items)} > Del </button>
          <button onClick={()=>onUpdateHandler(items)} > Update </button> </li>
        
        </>)
    })}

</>

    )
}


export default ToDo