import React, {createContext} from "react"
import useFetch from "../hooks/useFetch";
import {api} from "../config/api"
import axios from "axios";

export const Context = createContext([[], () => {
}])


const ContextProvider = ({children}) => {
    const [posts,postLoading] = useFetch(`${api}/posts`)
    const [users,userLoading] = useFetch(`${api}/users`)
    const [comments,commentLoading,setComments] = useFetch(`${api}/comments`)

    async function postNewComment(data) {
        try{
            const response = await axios.post(`${api}/comments`, data)
            const result = await response.data
            setComments([...comments, result])
        }catch (error) {
            console.log(error)
        }
    }


    const value = {posts, users, comments, postNewComment,postLoading,userLoading,commentLoading}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
