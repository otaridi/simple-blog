import React, {useContext} from "react"
import {Context} from "../../context/Context";
import {NavLink} from "react-router-dom";
import Comments from "../../components/Comments";
import Spinner from "../../components/Spinner";

const PostPage = ({match}) => {
    const {posts, comments, users, randomImage} = useContext(Context)
    // id form url
    const {id} = match.params
    // current post
    const post = posts.find(el => el.id === +id)
    // current post's user
    const user = users.find(el => el.id === post.userId)
    // current posts comments
    const comment = comments.filter(el => el.postId === +id)

    return (
        <div>
            {
                user && post && comment ?
                    <div className='post-page-container'>
                        <h2>{post.title}</h2>
                        <NavLink to={{pathname:`/user/${user.id}`, imageId:{id}}}>
                            <h2>{user.name}</h2>
                        </NavLink>
                        <img src={randomImage(id)} alt="post"/>
                        <h2>{post.body}</h2>
                        <Comments comments={comment}/>
                    </div>
                    : <Spinner />
            }

        </div>
    )
}

export default PostPage