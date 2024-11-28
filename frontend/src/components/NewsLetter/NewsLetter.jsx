import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>GET EXCLUSIVE OFFERS ON YOUR EMAIL</h1>
        <p>Subscribe to newsletter and stay updated</p>
        <div>
    <input type='email' placeholder='your email id'/>
    <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter