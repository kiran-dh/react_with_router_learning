function ThemeReducer(state,action){
    switch(action.type){
        case "ToggleTheme":
            return{
                ...state,
                darkMode: !state.darkMode
            }
        default:{
            return state
        }
    }
}

export default ThemeReducer;
