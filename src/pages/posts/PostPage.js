import React, {useContext, useEffect} from "react"
import {Context} from "../../context/Context";
import {NavLink, useParams} from "react-router-dom";
import Comments from "../../components/Comments";
import Spinner from "../../components/Spinner";
import {Skeleton} from "@material-ui/lab";
import {routes} from "../../config/routes";
import PageNotFound from "../../components/PageNotFound";

const PostPage = () => {
    const {posts,  users, comments,postLoading,userLoading,commentLoading} = useContext(Context)
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
    if(postLoading && !post) return <PageNotFound />
    return (
        <div className='post-page-container'>
            {
                !postLoading || !userLoading || !commentLoading ?
                    <Spinner />
                    :<div>
                        <div className='current-post'>
                            <section className='post-title'>
                                <h2>{post.title.substr(0,20)}</h2>
                                {
                                    posts.length === 0? <Skeleton variant='rect' width={250} height={250} />
                                        :<img src={`https://picsum.photos/id/${id}/200`} alt="post" style={{width:250, height:250}} />
                                }
                            </section>
                            <section className='post-info'>
                                <NavLink to={`${routes.user}/${user.id}`}>
                                    <h3>{user.name}</h3>
                                </NavLink>
                                <h2>{post.body}</h2>
                            </section>
                        </div>
                        <section className='comment-info'>
                            <Comments comments={comment}/>
                        </section>
                    </div>
            }

        </div>
    )
}

export default PostPage