import React, {useContext} from "react"
import {NavLink} from "react-router-dom";
import {Context} from "../context/Context";

const Post = ({title, id})=>{
    const {randomImage} = useContext(Context)

    return (
        <div className='post'>
            <section className='title'>
                <h3>{title.substr(0,30)}</h3>
            </section>
            <img src={randomImage(id)} alt="post" className='post-image'/>
            <section className='read-more'>
                <NavLink to={`/post/${id}`} >
                    <button>read more</button>
                </NavLink>
            </section>
        </div>
    )
}

export default Post