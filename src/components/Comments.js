import React from "react"

const Comments = ({comments}) => {
    return (
        <div className='comment-container'>
            <h3>Comments</h3>
            {
                comments.map(el => {
                    return <div key={el.id} className='comment'>
                        <h4 className='name'>{el.name}</h4>
                        <h5 className='body'>{el.body}</h5>
                    </div>
                })
            }
        </div>
    )
}

export default Comments