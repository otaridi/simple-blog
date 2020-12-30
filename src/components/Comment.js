import React, {useContext, useReducer} from "react"
import {useParams} from "react-router";
import Button from "./Button";
import {Context} from "../context/Context";

const Comment = ({toggleModal}) => {
    // id from url
    const {id} = useParams()
    const {postNewComment} = useContext(Context)
    // all input state
    const [userInput, setUserInput] = useReducer((state, newState) => ({...state, ...newState}),
        {
            postId: +id,
            name: '',
            email: '',
            body: '',
        }
    );
    const formSubmit = (e) => {
        const {name, email, body} = userInput
        if(!name && !email && !body){
            e.preventDefault()
        }else{
            postNewComment(userInput)
            toggleModal()
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserInput({[name]: value})
    }

    return (
        <div>
            <div className='comment-inputs-container'>
                <form onSubmit={formSubmit}>
                    <section className='inputs'>
                        <input type="text" name='name' autoComplete='off' onChange={handleChange}
                               placeholder='name'/>
                        <input type="email" name='email' onChange={handleChange}
                               placeholder='email'/>
                        <textarea name='body' placeholder='Comment' onChange={handleChange}>
                        </textarea>
                    </section>
                    <section className='new-comment-buttons'>
                        <Button onClick={toggleModal} className='cancel-modal'>Cancel</Button>
                        <Button className='submit-new-comment'
                                type='submit'>Add</Button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Comment