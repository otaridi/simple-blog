import React from "react"

const Comments = ({comments}) => {
    return (
        <div className='comment-container'>
            <h1>Comments section</h1>
            {
                comments.map(el => {
                    return <div key={el.id} className='comment'>
                        <h3>{el.name}</h3>
                        <h4>{el.body}</h4>
                    </div>
                })
            }
        </div>
    )
}

export default Comments