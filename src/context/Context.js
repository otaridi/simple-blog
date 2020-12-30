import React, {createContext} from "react"
import useFetch from "../hooks/useFetch";

import * as api from "../endpoints"
import axios from "axios";

export const Context = createContext([[], () => {
}])


const ContextProvider = ({children}) => {
    const [posts] = useFetch(api.POSTS)
    const [users] = useFetch(api.USERS)
    const [comments, setComments] = useFetch(api.COMMENTS)

    async function postNewComment(data) {
        const response = await axios.post(api.COMMENTS, data)
        const result = await response.data
        setComments([...comments, result])
    }

    const randomImage = id => {
        return `https://picsum.photos/id/${id}/200`
    }
    const value = {posts, users, comments, randomImage, postNewComment}
    // console.log("value form context",comments)
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
