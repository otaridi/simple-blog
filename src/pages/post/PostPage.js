import React, {useContext} from "react"
import {Context} from "../../context/Context";
import {NavLink} from "react-router-dom";
import '../../spinner.css'
import Comments from "../../components/Comments";

const PostPage = ({match}) => {
    const {posts, comments, users} = useContext(Context)
    const {id} = match.params

    const image = `https://picsum.photos/id/${id}/200`
    const post = posts.find(el => el.id === +id)
    const user = users.find(el => el.id === post.userId)
    const comment = comments.filter(el => el.postId === +id)
    console.log("user", user)
    // console.log("post", post)
    // console.log("comment", comment)
    return (
        <div>
            {
                user && post && comment ?
                    <div>
                        <h2>{post.title}</h2>
                        <NavLink to={`/user/${user.id}`}>
                            <h2>{user.name}</h2>
                        </NavLink>
                        <img src={image} alt="post"/>
                        <h2>{post.body}</h2>
                        <Comments comments={comment}/>
                    </div>
                    : <div className="lds-ripple">
                        <div/>
                        <div/>
                    </div>
            }

        </div>
    )
}

export default PostPage