import React, { useState, useRef } from 'react'
import './Contact.css'
import { updateForm } from '../../actions/action_creators';
import { useDispatch } from 'react-redux';


export default function Contact() {
  const dispatch = useDispatch();
  const firstNameInput = useRef(null)
  const lastNameInput = useRef(null)
  const emailInput = useRef(null)
  const commentInput = useRef(null)

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    dispatch(updateForm(event.target.name, event.target.value));
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    dispatch(updateForm(event.target.name, event.target.value));
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    dispatch(updateForm(event.target.name, event.target.value));
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
    dispatch(updateForm(event.target.name, event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(updateForm(firstName, lastName, email, comments));

    firstNameInput.current.value = ''
    lastNameInput.current.value = ''
    emailInput.current.value = ''
    commentInput.current.value = ''
  }
  
  return (
    <div>
      <form action="#" className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="formrow">
          First Name:
          <input type="text" name="firstName" id="firstname" ref={firstNameInput} required onChange={handleFirstNameChange}/>
        </label>
        <label htmlFor="lastname" className="formrow">
          Last Name:
          <input type="text" name="lastName" id="lastname" className='last-name' ref={lastNameInput} onChange={handleLastNameChange}/>
        </label>
        <label htmlFor="email" className="formrow">
          Email:
          <input type="email" name="email" id="email" required className='email-form' ref={emailInput} onChange={handleEmailChange}/>
        </label>
        <label htmlFor="comments" className='formrow comment-label'>
          Comments:
          <input type="text" name="comments" id="comments" required className='comment-box' ref={commentInput} onChange={handleCommentsChange}/>
        </label>
        <div>
          <button type="submit" className='formrow submit-button'>Send</button>
        </div>
      </form>
    </div>
  )
}
