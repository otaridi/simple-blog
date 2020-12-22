import React, {useContext}  from "react"
import Post from "./Post";
import '../spinner.css'
import {Context} from "../context/Context";

const Posts = () => {
    const {posts} = useContext(Context)
    return (
        <div className='post-container'>
            {
                posts.length === 0 ?
                    <div className="lds-ripple">
                        <div/>
                        <div/>
                    </div> :
                    posts.map(({id,title}) => {
                        return <Post key={id} title={title} id={id}/>
                    })
            }
        </div>
    )
}

export default Posts
