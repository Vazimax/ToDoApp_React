import React, { useEffect } from 'react';

export default function ToDoInput(props) {
    const { handleAddOrEditTodo, todoValue, setTodoValue, editingIndex, setEditingIndex } = props;

    useEffect(() => {
        if (editingIndex !== null) {
            setTodoValue(todoValue);
        }
    }, [editingIndex]);

    return (
        <header>
            <input
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                placeholder="Enter your todo task"
            />
            <button onClick={() => {
                handleAddOrEditTodo(todoValue);
                setTodoValue('');
                setEditingIndex(null);
            }}>
                {editingIndex !== null ? 'Edit' : 'Add'}
            </button>
        </header>
    );
}
