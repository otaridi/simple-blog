import React, {useState, useEffect} from "react"

const useFetch = (url)=>{
    const [state,setState] = useState([])
    const fetchData = async ()=>{
        const response = await fetch(url)
        const result = await response.json()
        setState(result)
    }
    useEffect(()=>{
        fetchData()
    },[])

    return [state,setState]
}

export default useFetch
