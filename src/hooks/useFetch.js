import {useEffect, useState} from "react"

const useFetch = (url) => {
    const [state, setState] = useState([])
    useEffect(() => {
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
