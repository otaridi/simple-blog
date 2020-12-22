import React, {useContext}  from "react"
import Post from "./Post";
import Spinner from "./Spinner";

const Posts = ({posts}) => {
    return (
        <div className='post-container'>
            {
                posts.length === 0 ?
                    <Spinner />
                    :
                    posts.map(({id,title}) => {
                        return <Post key={id} title={title} id={id}/>
                    })
            }
        </div>
    )
}

export default Posts
