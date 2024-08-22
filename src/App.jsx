import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Signup from './Components/Signup';
import TodoSelector from './Components/TodoSelector';  // Import TodoSelector
import UserDetailsForm from './Components/UserDetailsForm'; // Import UserDetailsForm
import AdminTodoComponent from './Components/AdminTodoComponent';
import UserTodoComponent from './Components/UserTodoComponent';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/register" element={<TodoSelector />} />
        <Route path="/user-details" element={<UserDetailsForm />} />
        <Route path="/admin-todos" element={<AdminTodoComponent />} />
        <Route path="/user-todos" element={<UserTodoComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
