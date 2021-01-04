import React, {useContext, useEffect} from "react"
import {Context} from "../../context/Context";
import {NavLink, useParams} from "react-router-dom";
import Comments from "../../components/Comments";
import Spinner from "../../components/Spinner";

const PostPage = () => {
    const {posts,  users, comments, randomImage} = useContext(Context)
    // id form url
    const {id} = useParams()
    // current post
    const post =  posts.find(el => el.id === +id)
    // current post's user
    const user = users.find(el => el.id === post?.userId)
    // current post comments
    const comment =  comments.filter(el => el.postId === +id)

    useEffect(()=>{
        window.scrollTo(0, 0)
        document.title = `${user?.name}`
    },[user])

    return (
        <div className='post-page-container'>
            {
                user && post && comment ?
                    <div>
                        <div className='current-post'>
                            <section className='post-title'>
                                <h2>{post.title.substr(0,20)}</h2>
                                <img src={randomImage(id)} alt="post"/>
                            </section>
                            <section className='post-info'>
                                <NavLink to={`/user/${user.id}`}>
                                    <h3>{user.name}</h3>
                                </NavLink>
                                <h2>{post.body}</h2>
                            </section>
                        </div>
                        <section className='comment-info'>
                            <Comments comments={comment}/>
                        </section>
                    </div>
                    : <Spinner />
            }

        </div>
    )
}

export default PostPage