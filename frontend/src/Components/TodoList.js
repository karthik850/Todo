import React, { useEffect, useState } from 'react'
import CreateTodo from './CreateTodo'
import axios from "axios";
import Button from './Button';
import getCookie from './getCookie';
function TodoList(props) {
    const [todos,setTodos]=useState([])
    const [error,setError] = useState('')
    useEffect(()=>{
        getTodos()
    },[props.url])
    const getTodos=()=>{
        axios.get(props.url).then(data => {
            setTodos(data.data)   
        }).catch((err)=>{
            setError(err)
        })
    }
    const deleteTodo=(id)=>{
        var csrftoken =getCookie('csrftoken')

        fetch('http://127.0.0.1:8000/todoapp/deleteTodo/'+id,{
            method: 'DELETE',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken}
        }).then((post) => {
    
            getTodos()
            
        })
    }
    
    const completeTodo=(id)=>{
        var csrftoken =getCookie('csrftoken')
        fetch('http://127.0.0.1:8000/todoapp/completeTodo/'+id+"/",{
            method: 'PUT',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken,
                'body':"true"}
        }).then((post) => {
    
            getTodos()
            
        })
    }

    return (
        <div className="col-12">
            <CreateTodo getTodos={getTodos}/>
            <Button />
            <br />
        {error && <div>{error}</div>}
        {todos && todos.length!==0 ? Object.values(todos).map(input => {
          return(
          <div key={input.id}>
          <li className="list-group-item d-flex justify-content-between align-items-center">
                {input.completed ? <s>{input.todo}</s>:<p>{input.todo}</p>}
                <div className="btn-toolbar" role="group" aria-label="Basic example">
                    <div className="btn-group mr-2" role="group" aria-label="First group">
                        <button type="button" className="btn btn-danger" onClick={(e)=>deleteTodo(input.id)}>Delete</button>
                    </div>
                    <div className="btn-group mr-2" role="group" aria-label="Second group">
                        {input.completed ? null:
                        <button type="button" className="btn btn-warning" onClick ={(e)=>completeTodo(input.id)}>Complete</button>}
                        
                </div>
                </div>
        </li>
          </div>
        )  
        }):
        <div><li className="list-group-item d-flex justify-content-between align-items-center">
        No items
</li></div>}
        
      </div>
    )
}

export default TodoList
