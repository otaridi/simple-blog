import {useEffect, useState} from "react"
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState([])
    const [loading,setLoading] = useState(false)

    async function fetchData() {
        try{
            const {data} =  await axios(url)
            setData(data)
            setLoading(true)
        }catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return [data,loading, setData]
}

export default useFetch
