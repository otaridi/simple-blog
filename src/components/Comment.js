import React from "react"
import Button from "./Button";


const Comment = ({toggleModal}) => {
    return (
        <div>
            <h1>input fields for comment</h1>
            <div className="buttons">
                <Button className='submit-new-comment'
                        onClick={() => console.log("add")}>Add</Button>
                <Button onClick={toggleModal} className='cancel-modal'>Cancel</Button>
            </div>
        </div>
    )
}

export default Comment