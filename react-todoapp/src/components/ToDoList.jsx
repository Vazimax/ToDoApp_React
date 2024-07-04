import React from 'react'
import ToDoCard from "./ToDoCard";

export default function ToDoList() {
  let todos = [
    'Work out',
    'React course',
    'EVM course',
    'German'
  ]
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
