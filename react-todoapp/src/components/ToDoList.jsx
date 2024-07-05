import React from 'react';
import ToDoCard from './ToDoCard';

export default function ToDoList(props) {
    const { todos, handleDeleteTodo, handleEditTodo } = props;

    return (
        <ul className='main'>
            {todos.map((todo, index) => (
                <ToDoCard
                    key={index}
                    index={index}
                    handleDeleteTodo={handleDeleteTodo}
                    handleEditTodo={handleEditTodo}
                >
                    <p>{todo}</p>
                </ToDoCard>
            ))}
        </ul>
    );
}
