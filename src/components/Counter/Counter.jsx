// import UseCounter from "../../hooks/useCounter";
import { useReducer } from "react";
import CounterReducer from "../../Reducers/CounterReducer"

function Counter(){

    const[count,dispatch]=useReducer(CounterReducer,0)

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>dispatch({ type:"ReducerPlus" })}>
                ReducerPlus
            </button>
            <button onClick={()=>dispatch({ type:"ReducerMinus" })}>
                ReducerMinus
            </button>
            <button onClick={()=>dispatch({ type:"ReducerReset" })}>
                ReducerReset
            </button>
            
        </div>
    )

    // function Counter(){
    //     const{
    //         increase,
    //         decrease,
    //         reset,
    //         count
    //     } = UseCounter();

    // return(
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={()=>increase()} >
    //             Plus
    //         </button>
    //         <button onClick={()=>decrease()} >
    //             Minus
    //         </button>
    //         <button onClick={()=>reset()} >
    //             Reset
    //         </button>
            
    //     </div>
    // )

}

export default Counter;