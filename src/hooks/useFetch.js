import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [state, setState] = useState([])
    useEffect(() => {
        // const fetchData = async () => {
        //     try {
        //         const response = await fetch(url)
        //         const result = await response.json()
        //         setState(result)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        //     fetchData()
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setState(data)
            })
            .catch(err => console.log(err))
    }, [])

    return [state, setState]
}

export default useFetch
