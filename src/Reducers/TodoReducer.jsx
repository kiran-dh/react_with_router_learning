function TodoReducer(state,action){

    switch(action.type){
        case "AddTodo":
            return[
                ...state,
                {
                    id: Date.now(),
                    text: action.payload,
                    completed: false
                }
            ]
        
        case "DeleteTodo":
            return state.filter(
                    (todo)=>todo.id !== action.payload
                )
                
        case "ToggleTodo":
            return(
                state.map((todo)=>
                    todo.id === action.payload ?
                    {
                        ...todo,
                        completed: !todo.completed
                    }
                    :todo
                )
            )
        default:{
            return state
        }
    }
}

export default TodoReducer;