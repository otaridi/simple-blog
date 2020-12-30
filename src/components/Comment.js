import React, {useContext, useReducer, useState, useEffect} from "react"
import {useParams} from "react-router";
import Button from "./Button";
import {Context} from "../context/Context";

const Comment = ({toggleModal}) => {
    const [warning, setWarning] = useState('')
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
    const {name, email, body} = userInput

    const formSubmit = (e) => {
        if (!name || !email || !body) {
            setWarning('All field are required')
            e.preventDefault()
        } else {
            postNewComment(userInput)
            toggleModal()
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserInput({[name]: value})
    }

    useEffect(()=>{
        return ()=>setWarning('')
    },[name,email,body])

    return (
        <div>
            <div className='comment-inputs-container'>
                <form onSubmit={formSubmit}>
                    <section className='inputs'>
                        <input type="text" name='name'
                               autoComplete='off' onChange={handleChange}
                               placeholder='name'/>
                        <input type="email" name='email'
                               onChange={handleChange}
                               placeholder='email'/>
                        <textarea name='body' placeholder='Comment'
                                  onChange={handleChange}>
                        </textarea>
                        <h4 className='warning-text'>{warning? warning : ''}</h4>
                    </section>
                    <section className='new-comment-buttons'>
                        <Button onClick={toggleModal} className='cancel-modal'>Close</Button>
                        <Button className='submit-new-comment'
                                type='submit'>Add</Button>
                    </section>
                </form>
            </div>
        </div>
    )
}

export default Comment