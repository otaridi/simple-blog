import React, {useContext} from "react"
import {NavLink} from "react-router-dom";
import {Context} from "../context/Context";
import Button from "./Button";
import {Skeleton} from "@material-ui/lab";
import {routes} from "../config/routes";

const Post = ({title, id}) => {
    const {posts} = useContext(Context)

    return (
        <div className='post'>
            <section className='title'>
                <h3>{title.substr(0, 30)}</h3>
            </section>
            {
                posts.length === 0 ? <Skeleton variant='rect' width={250} height={250}/>
                    : <img src={`https://picsum.photos/id/${id}/200`} alt="post"
                           style={{width: 250, height: 250}} className='post-image'/>
            }

            <section className='read-more'>
                <NavLink to={`${routes.post}/${id}`}>
                    <Button>read more</Button>
                </NavLink>
            </section>
        </div>
    )
}

export default Post