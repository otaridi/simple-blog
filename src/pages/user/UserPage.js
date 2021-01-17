import React, {useContext} from "react"
import {Context} from "../../context/Context";
import Spinner from "../../components/Spinner";
import Posts from "../../components/Posts";
import {useParams} from "react-router";
import {Skeleton} from "@material-ui/lab";
import PageNotFound from "../../components/PageNotFound";

const UserPage = () => {
    const {users, posts, userLoading} = useContext(Context)
    // id form url
    const {id} = useParams()
    // current user
    const user = users.find(el => el.id === +id)
    // current user posts
    const post = posts.filter(el => el.userId === user?.id)

    if(userLoading && !user) return <PageNotFound />
    return (
        <div className='user-page-container'>
            {
                !userLoading ?
                    <Spinner/>
                    :
                    <div>
                        <section className='user-container'>
                            <section className='user-info'>
                                <h2>{user.name}</h2>
                                <h2>{user.username}</h2>
                                <h2>{user.email}</h2>
                                <h2>{`${user.address.city} - ${user.address.street} - ${user.address.suite}`}</h2>
                            </section>
                            <section className='user-image'>
                                {
                                    posts.length === 0? <Skeleton variant='rect' width={250} height={250} />
                                        :<img src={`https://picsum.photos/id/${id}/200`} alt="user" style={{width:250, height:250}} />
                                }
                            </section>
                        </section>
                        <h2>related posts from {user.name}</h2>
                        <Posts posts={post} />
                    </div>
            }

        </div>
    )
}

export default UserPage