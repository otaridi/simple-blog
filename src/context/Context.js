import React, {createContext} from "react"
import useFetch from "../hooks/useFetch";

import * as api from "../endpoints"

export const Context = createContext()

const ContextProvider = ({children}) => {
    const [posts] = useFetch(api.POSTS)
    const [users] = useFetch(api.USERS)
    const [comments] = useFetch(api.COMMENTS)

    return (
        <Context.Provider value={{posts, users, comments}}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider
