import React, {useContext} from "react"
import {Context} from "../../context/Context";
import Spinner from "../../components/Spinner";
import Posts from "../../components/Posts";

const UserPage = ({match}) => {
    const {users, posts, randomImage} = useContext(Context)
    // id form url
    const {id} = match.params
    // current user
    const user = users.find(el => el.id === +id)
    // current user posts
    const post = posts.filter(el => el.userId === user?.id)
    return (
        <div className='user-page-container'>
            {
                user ?
                    <div>
                        <section className='user-container'>
                            <section className='user-info'>
                                <h2>{user.name}</h2>
                                <h2>{user.username}</h2>
                                <h2>{user.email}</h2>
                                <h2>{`${user.address.city} - ${user.address.street} - ${user.address.suite}`}</h2>
                            </section>
                            <section className='user-image'>
                                <img src={randomImage(id)} alt="user"/>
                            </section>
                        </section>
                        <h2>related posts from {user.name}</h2>
                        <Posts posts={post} />
                    </div>
                    :
                    <Spinner/>
            }

        </div>
    )
}

export default UserPage