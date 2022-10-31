import React from 'react'

const Form = () => {
  return (
    <><form method="POST">
    <div className="row">
      <div className="">
        <label>* Enter your email:</label> 
        <input type="email" name="user_email" placeholder='your@email.com' />
        </div>
        <div className="">
          <label>* Enter your name:</label>
          <input type="text" name="user_name" placeholder='Your name' />
          </div>
      </div>

      <div className="row">
        <div className="">
          <label>* Enter your message:</label>
          <br />
          <textarea name="message" placeholder='Enter text here' />
          </div>
        <div className="btn">
          <button className='submitbtn'>Submit</button>
          </div>
      </div>
    </form>
  </>
  )
}

export default Form
