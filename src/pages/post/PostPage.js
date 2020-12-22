import React, {useContext, useEffect} from "react"
import {Context} from "../../context/Context";
import {NavLink} from "react-router-dom";
import Comments from "../../components/Comments";
import Spinner from "../../components/Spinner";

const PostPage = ({match}) => {
    const {posts, comments, users} = useContext(Context)
    const {id} = match.params

    const image = `https://picsum.photos/id/${id}/200`
    const post = posts.find(el => el.id === +id)
    const user = users.find(el => el.id === post.userId)
    const comment = comments.filter(el => el.postId === +id)
    // console.log("user", user)
    // console.log("post", post)
    // console.log("comment", comment)
    useEffect(()=>{

    },[])
    return (
        <div>
            {
                user && post && comment ?
                    <div className='post-page-container'>
                        <h2>{post.title}</h2>
                        <NavLink to={`/user/${user.id}`}>
                            <h2>{user.name}</h2>
                        </NavLink>
                        <img src={image} alt="post"/>
                        <h2>{post.body}</h2>
                        <Comments comments={comment}/>
                    </div>
                    : <Spinner />
            }

        </div>
    )
}

export default PostPage