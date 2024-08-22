import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoComponent = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [updateTodo, setUpdateTodo] = useState('');
    const [updateId, setUpdateId] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Fetch todos on component mount
    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.get('http://127.0.0.1:8000/api-django/todos/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
            setError('Failed to fetch todos.');
        }
    };

    const handleAddTodo = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.post('http://127.0.0.1:8000/api-django/todos/', { title: newTodo }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos([...todos, response.data]);
            setNewTodo('');
            setSuccess('Todo added successfully.');
        } catch (error) {
            console.error('Error adding todo:', error);
            setError('Failed to add todo.');
        }
    };

    const handleUpdateTodo = async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.put(`http://127.0.0.1:8000/api-django/todos/${updateId}/`, { title: updateTodo }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos(todos.map(todo => todo.id === updateId ? response.data : todo));
            setUpdateTodo('');
            setUpdateId(null);
            setSuccess('Todo updated successfully.');
        } catch (error) {
            console.error('Error updating todo:', error);
            setError('Failed to update todo.');
        }
    };

    const handlePatchTodo = async (id, partialUpdate) => {
        const token = localStorage.getItem('token');
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api-django/todos/${id}/`, partialUpdate, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setTodos(todos.map(todo => todo.id === id ? response.data : todo));
            setSuccess('Todo patched successfully.');
        } catch (error) {
            console.error('Error patching todo:', error);
            setError('Failed to patch todo.');
        }
    };

    return (
        <div>
            <h2>Todos</h2>
            <div>
                <input
                    type="text"
                    placeholder="New todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Update todo"
                    value={updateTodo}
                    onChange={(e) => setUpdateTodo(e.target.value)}
                />
                <button onClick={handleUpdateTodo}>Update Todo</button>
            </div>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => handlePatchTodo(todo.id, { title: 'Patched Title' })}>Patch Title</button>
                    </li>
                ))}
            </ul>
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default TodoComponent;
