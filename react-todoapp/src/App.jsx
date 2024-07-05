import React, { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
    const [todos, setToDos] = useState([]);
    const [todoValue, setToDoValue] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const localToDos = localStorage.getItem('todos');
        if (localToDos) {
            setToDos(JSON.parse(localToDos).todos);
        }
    }, []);

    function persistData(newList) {
        localStorage.setItem('todos', JSON.stringify({ todos: newList }));
    }

    function handleAddOrEditTodo(newTodo) {
        if (editingIndex !== null) {
            const newTodoList = todos.map((todo, index) => index === editingIndex ? newTodo : todo);
            setToDos(newTodoList);
            setEditingIndex(null);
            persistData(newTodoList);
        } else {
            if (newTodo.trim() !== '') {
                const newTodoList = [...todos, newTodo];
                setToDos(newTodoList);
                persistData(newTodoList);
            }
        }
        setToDoValue('');
    }

    function handleDeleteTodo(index) {
        const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
        setToDos(newTodoList);
        persistData(newTodoList);
    }

    function handleEditTodo(index) {
        setToDoValue(todos[index]);
        setEditingIndex(index);
    }

    return (
        <>
            <ToDoInput
                todoValue={todoValue}
                setTodoValue={setToDoValue}
                handleAddOrEditTodo={handleAddOrEditTodo}
                editingIndex={editingIndex}
                setEditingIndex={setEditingIndex}
            />
            <ToDoList
                handleDeleteTodo={handleDeleteTodo}
                handleEditTodo={handleEditTodo}
                todos={todos}
            />
        </>
    );
}

export default App;
