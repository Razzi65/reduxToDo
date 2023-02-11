import UseToDo from "@/custom hooks/useToDo"



const ToDo = () => {

    const {events, setEvents, onClickHandler, data, onDelHandler} = UseToDo()

   



    return(<>

    <input value={events} onChange={(e)=>setEvents(e.target.value)}  />

    <button onClick={onClickHandler} > Add </button> <br/>
    <button onClick={()=>onDelHandler()} > Del </button> <br/>

    {data.map((items)=> {
        return( <>
        <li>{items.item}</li>
        <li>{items.id}</li>
        </>)
    })}

</>

    )
}


export default ToDo