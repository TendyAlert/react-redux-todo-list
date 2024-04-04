import React, { useState } from 'react'
import './Contact.css'

export default function Contact() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`form submitted ${firstName} ${lastName} ${email} ${comments}`)
  }
  
  return (
    <div>
      <form action="#" className='contact-form' onSubmit={handleSubmit}>
        <label htmlFor="firstname" className="formrow">
          First Name:
          <input type="text" name="firstname" id="firstname" required onChange={handleFirstNameChange}/>
        </label>
        <label htmlFor="lastname" className="formrow">
          Last Name:
          <input type="text" name="lastname" id="lastname" className='last-name' onChange={handleLastNameChange}/>
        </label>
        <label htmlFor="email" className="formrow">
          Email:
          <input type="email" name="email" id="email" required className='email-form' onChange={handleEmailChange}/>
        </label>
        <label htmlFor="comments" className='formrow comment-label'>
          Comments:
          <input type="text" name="comments" id="comments" required className='comment-box' onChange={handleCommentsChange}/>
        </label>
        <div>
          <button type="submit" className='formrow submit-button'>Send</button>
        </div>
      </form>
    </div>
  )
}
