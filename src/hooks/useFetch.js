import {useEffect, useState} from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([])

    async function fetchData() {
        try{
            const {data} =  await axios(url)
            setData(data)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data, setData}
}

export default useFetch
