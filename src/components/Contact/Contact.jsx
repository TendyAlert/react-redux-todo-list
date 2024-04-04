import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
      <form action="#" className='contact-form'>
        <div className="formrow">
          <label htmlFor="firstname">
            First Name:
            <input type="text" name="firstname" id="firstname" required/>
          </label>
        </div>
        <div className="formrow">
          <label htmlFor="lastname">
            Last Name:
            <input type="text" name="lastname" id="lastname" className='last-name'/>
          </label>
        </div>
        <div className="formrow">
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" required className='email-form'/>
          </label>
        </div>
        <div className="formrow">
          <label htmlFor="comments" className='comment-label'>
            Comments:
            <input type="text" name="comments" id="comments" required className='comment-box'/>
          </label>
        </div>
        <div className="formrow">
          <button type="submit" className='submit-button'>Send</button>
        </div>
      </form>
    </div>
  )
}
