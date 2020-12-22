import React, {useContext} from "react"
import Posts from "../../components/Posts";
import {Context} from "../../context/Context";

const MainPage = ()=>{
    const {posts} = useContext(Context)

    return (
        <div className='main-page'>
            <h2>main page</h2>
            <Posts posts={posts}/>
        </div>
    )
}

export default MainPage