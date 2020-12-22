import React from "react"
import {NavLink} from "react-router-dom";

const Post = ({title, id})=>{

    const image = `https://picsum.photos/id/${id}/200`
    return (
        <div className='post'>
            <section className='title'>
                <h3>{title.substr(0,30)}</h3>
            </section>
            <img src={image} alt="post" className='post-image'/>
            <section className='read-more'>
                <NavLink to={`/post/${id}`} >
                    <button>read more</button>
                </NavLink>
            </section>
        </div>
    )
}

export default Post