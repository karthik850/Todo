import React, { useState } from 'react'
import getCookie from './getCookie'


function CreateTodo(props) {
    const [todo,setTodo]=useState("")

    const handleSubmit= (e) => {
        e.preventDefault()
        const newtodo={'todo':todo}
        var csrftoken =getCookie('csrftoken')
        var url='http://127.0.0.1:8000/todoapp/createTodo/'
        fetch(url,{
            method: 'POST',
            headers: {"Content-Type": "application/json",
                    'X-CSRFToken':csrftoken},
            body: JSON.stringify(newtodo)
        }).then((post) => {
            props.getTodos()
            setTodo("")
            
        })

    }
    return (
        <div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Add todo" aria-label="Recipient's username" aria-describedby="basic-addon2" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-success" type="submit">Add</button>
                    </div>
                    </div>
                    </div>

                </form>
            </div>
    )
}

export default CreateTodo
