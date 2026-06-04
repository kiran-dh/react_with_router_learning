import { useState } from "react";

function UseCounter(){
    
    const[count,setCount]=useState(0)

    const increase = ()=>{
        setCount(count+1)
    }

    const decrease= ()=>{
        setCount(count-1)
    }

    const reset =()=>{
        setCount(0)
    }

    return{
        increase,
        decrease,
        reset,
        count,
    }
    
}

export default UseCounter;