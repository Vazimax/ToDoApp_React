import { useState } from "react";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

function App(){
  

  const [todos, setToDos] = useState([])

  function handleAddToDos(newTodo){
    const newTodoList = [...todos, newTodo]
    setToDos(newTodoList)
  }

  function handleDeleteTodo(index){
    
  }

  return (
    <>
        <ToDoInput handleAddToDos={handleAddToDos}/>
        <ToDoList todos={todos}></ToDoList>
    </>
  )

}

export default App;