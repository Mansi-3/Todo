import React, { useState } from 'react';
import axios from 'axios';

const AdminTodoComponent = () => {
    const [todoName, setTodoName] = useState('');
    const [todoId, setTodoId] = useState('');
    const [message, setMessage] = useState('');

    const addTodo = async () => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
                title: todoName,
                userId: 1,  // or any user ID as required
            });
            setMessage(`Todo added with ID: ${response.data.id}`);
        } catch (error) {
            setMessage('Failed to add todo');
            console.error('Error adding todo:', error);
        }
    };

    const updateTodo = async () => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
                title: todoName,
            });
            setMessage('Todo updated successfully');
        } catch (error) {
            setMessage('Failed to update todo');
            console.error('Error updating todo:', error);
        }
    };

    return (
        <div>
            <h2>Admin Todo Management</h2>
            <div>
                <input
                    type="text"
                    placeholder="Todo Name"
                    value={todoName}
                    onChange={(e) => setTodoName(e.target.value)}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div>
                <input
                    type="number"
                    placeholder="Todo ID"
                    value={todoId}
                    onChange={(e) => setTodoId(e.target.value)}
                />
                <button onClick={updateTodo}>Update Todo</button>
            </div>
            <p>{message}</p>
        </div>
    );
};

export default AdminTodoComponent;
