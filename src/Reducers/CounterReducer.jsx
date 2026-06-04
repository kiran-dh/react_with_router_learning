export default function CounterReducer(state,action){
    switch(action.type){
        case "ReducerPlus":
            return state + 1;
        case "ReducerMinus":
            return state - 1;
        case "ReducerReset":
            return 0;
        default:
            return state;
    }

    return state
}