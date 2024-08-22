import React from 'react';
import { Link } from 'react-router-dom';

const TodoSelector = () => {
    return (
        <div>
            <h2>Select Todo Interface</h2>
            <div>
                <Link to="/admin-todos">
                    <button>Admin Todo Management</button>
                </Link>
                <Link to="/user-todos">
                    <button>User Todo List</button>
                </Link>
            </div>
        </div>
    );
};

export default TodoSelector;
