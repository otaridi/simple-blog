import React, {useState} from "react"
import Modal from "./Modal";
import Comment from "./Comment";
import Button from "./Button";

const Comments = ({comments}) => {
    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => setShowModal(!showModal)
    return (
        <div className='comment-container'>
            <section className='comments-header'>
                <h3>Comments</h3>
                <Button
                    onClick={toggleModal}
                    className='add-comment-btn'
                >
                    Add comment
                </Button>
            </section>
            {showModal ? (
                <Modal>
                    <Comment toggleModal={toggleModal}/>
                </Modal>
            ) : null}
            {
                comments.map((el,i) => {
                    return <div key={i} className='comment'>
                        <h4 className='name'>{el.name}</h4>
                        <h5 className='body'>{el.body}</h5>
                    </div>
                })
            }
        </div>
    )
}

export default Comments