import './ToDoList.css'

import List from "./List.js"
import {useState} from "react";


const ToDoList = () => {
    const [todo,setTodo] = useState('')
    const [list,setList] = useState([])

    const submit = (event) => {
        event.preventDefault()

        if(todo){
            setList([...list, todo])
        }
        setTodo('')
    }

    const change = (event) => {
        const value = event.target.value
        setTodo(value)
    }

    return (
        <div>
            <div className = "block" >
                <h2> To Do List </h2>
                <div className = "block2" >

                    <form onSubmit={submit}>
                        <input
                            type="text"
                            className="input"
                            placeholder="Напишите задачу"
                            value={todo}
                            onChange={change}/>
                        <button type="submit" > Add </button>
                    </form>
                    <List list = {list}/>

                </div>

            </div>

        </div>
    );
};

export default ToDoList;

