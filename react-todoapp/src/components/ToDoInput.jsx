import { useState } from "react"

export default function ToDoInput(props){
    const {handleAddToDos} = props
    const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) => {setTodoValue(e.target.value)}} placeholder="Enter your todo task" />
            <button onClick={() =>
                {handleAddToDos(todoValue)
                 setTodoValue('')
                }
            }>Add</button>
        </header>
    )
}