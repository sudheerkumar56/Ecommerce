import React from 'react'
import './css/loginsignup.css'

const LoginSignup = () => {
  return (
   <div className="loginsignup">
    <div className="loginsignup-container">
      <h1>SignUp</h1>
      <div className="loginsignup-fields">
        <input type="text" placeholder='Your Name'/>
        <input type="email" placeholder='Email Address' />
        <input type="password" placeholder='Password' />

      </div>
      <button>continue</button>
      <p className="loginsignup-login">Already have an account <span>Login Here</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name="" id="" />
        <p> by countinuing, I agree to the terms of use & privacy policy </p>
      </div>
    </div>
   </div>
  )
}

export default LoginSignup