import { useReducer, useState } from "react";
import TodoReducer from "../../Reducers/TodoReducer";
import "./Todo.css";

function Todo(){
    const[todos,dispatch]=useReducer(TodoReducer,[])
    const[input,setInput]=useState("")

    return(
        <div className="todo-container">
            <div className="todo-input-row">
            <input
                type="text"
                value={input}
                onChange={(e)=>setInput(e.target.value)}
             />
             <button onClick={()=>dispatch({type:"AddTodo",payload:input})}>
                AddTodo
             </button>
             </div>
             <div>
                {todos.map((todo)=>(
                    <div key={todo.id} className="todo-item">
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() =>
                                dispatch({
                                    type: "ToggleTodo",
                                    payload: todo.id,
                                })
                            }
                        />
                        <span style={{
                            textDecoration:todo.completed
                            ? "line-through"
                            : "none"
                        }}>
                            {todo.text}
                        </span>

                        <button onClick={()=>
                            dispatch({
                                type:"DeleteTodo",
                                payload:todo.id
                                })
                            }
                        >
                            Delete           
                        </button>
                    </div>
                ))}
             </div>
        </div>
    )

}

export default Todo;
