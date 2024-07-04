import React from 'react'
import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
  const {todos} = props
  return (
    <ul className='main'>
      {todos.map((todo, index) => {
        return (
          <ToDoCard key={index}>
            <p>{todo}</p>
          </ToDoCard>
        )
      })}
    </ul>
  )
}
