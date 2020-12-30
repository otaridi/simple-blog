import {useEffect, useState} from "react"
import axios from "axios";

const useFetch = (url) => {
    const [state, setState] = useState([])

    async function fetchData() {
        try{
            const {data} =  await axios(url)
            setState(data)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return [state, setState]
}

export default useFetch
