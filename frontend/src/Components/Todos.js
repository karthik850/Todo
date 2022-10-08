import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import TodoList from './TodoList';

function Todos() {

    return (
        <BrowserRouter>
        <Navbar/>
     <Routes>
     
     <Route path="/" element={<TodoList url='http://127.0.0.1:8000/todoapp/todolist/'/>} />
     <Route path="/completed" element={<TodoList url='http://127.0.0.1:8000/todoapp/completedTodoList/'/>} />
     <Route path="/inpending" element={<TodoList url='http://127.0.0.1:8000/todoapp/inProgessTodoList/'/>} />
   </Routes>
   </BrowserRouter>
    )
}

export default Todos
