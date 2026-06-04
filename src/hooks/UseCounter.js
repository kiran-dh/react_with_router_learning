export default function reducer(state,action){
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

// function UseCounter(){
    
//     const[count,setCount]=useState(0)

//     const increase = ()=>{
//         setCount(count+1)
//     }

//     const decrease= ()=>{
//         setCount(count-1)
//     }

//     const reset =()=>{
//         setCount(0)
//     }

//     return{
//         increase,
//         decrease,
//         reset,
//         count,
//     }
    
// }

// export default UseCounter;