import React, {createContext} from "react"
import useFetch from "../hooks/useFetch";

import * as api from "../endpoints"

export const Context = createContext(undefined)

const ContextProvider = ({children}) => {
    const [posts] = useFetch(api.POSTS)
    const [users] = useFetch(api.USERS)
    const [comments] = useFetch(api.COMMENTS)
    const value = {posts, users, comments}
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
