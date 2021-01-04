import React, {createContext} from "react"
import useFetch from "../hooks/useFetch";

import * as api from "../endpoints"
import axios from "axios";

export const Context = createContext([[], () => {
}])


const ContextProvider = ({children}) => {
    const {data:posts} = useFetch(api.POSTS)
    const {data:users} = useFetch(api.USERS)
    const {data:comments, setData:setComments} = useFetch(api.COMMENTS)

    async function postNewComment(data) {
        try{
            const response = await axios.post(api.COMMENTS, data)
            const result = await response.data
            setComments([...comments, result])
        }catch (error) {
            console.log(error)
        }
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
