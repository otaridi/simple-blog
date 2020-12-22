import React from "react"

const Post = ({title, image})=>{
    return (
        <div className='post'>
            <section className='title'>
                <h3>{title.substr(1,30)}</h3>
            </section>
            <img src={image} alt="post"/>
            <section className='read-more'>
                <button>read more</button>
            </section>
        </div>
    )
}

export default Post