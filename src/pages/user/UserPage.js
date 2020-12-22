import React, {useContext} from "react"
import {Context} from "../../context/Context";
import Spinner from "../../components/Spinner";
import Posts from "../../components/Posts";

const UserPage = ({match}) => {
    const {users, posts} = useContext(Context)
    const {id} = match.params
    const image = `https://picsum.photos/id/${id}/200`
    const user = users.find(el => el.id === +id)
    const post = posts.filter(el => el.userId === user.id)

    return (
        <div className='user-page-container'>
            {
                user ?
                    <div>
                        <h2>user page</h2>
                        <h2>{user.name}</h2>
                        <h2>{user.username}</h2>
                        <h2>{user.email}</h2>
                        <h2>{`${user.address.city} - ${user.address.street} - ${user.address.suite}`}</h2>
                        <img src={image} alt="user"/>
                        <Posts posts={post} />
                    </div>
                    :
                    <Spinner/>
            }

        </div>
    )
}

export default UserPage