import { useEffect,useState } from "react";

export default function UseFetch(url){

    const[loading,setLoding]=useState(true)
    const[data,setData]=useState([])

    useEffect(()=>{
        const fetchData =async()=>{
            try {
                const response= await fetch(url);
                const result = await response.json();
                setData(result) 
            } catch (error) {
                console.log("Error while fetching data")
            } finally{
                setLoding(false)
            }

        }

        fetchData();

    },[url])

    return{
        data,
        loading
    }
}