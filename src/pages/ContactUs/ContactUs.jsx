import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='contactUs-page-container'>
        <div className='contactUs-container'>
        <form>
            <div className='form-container'>
        <h1>ContactUs</h1>
            <input type="text" placeholder='First Name'></input>
            <input type="text" placeholder='Last Name'></input>
            <input id="query" type="text" placeholder='Write your message here'></input>
            <button>Submit</button>
            </div>
        </form>
        </div>
        
    </div>
  )
}

export default ContactUs