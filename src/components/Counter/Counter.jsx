import UseCounter from "../../hooks/useCounter";

function Counter(){
    const{
        increase,
        decrease,
        reset,
        count
    } = UseCounter();

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>increase()} >
                Plus
            </button>
            <button onClick={()=>decrease()} >
                Minus
            </button>
            <button onClick={()=>reset()} >
                Reset
            </button>
            
        </div>
    )

}

export default Counter;