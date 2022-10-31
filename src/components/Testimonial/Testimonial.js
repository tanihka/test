import React from 'react'
import Swiper from './Swiper'
import './testimonial.css'

const Testimonial = () => {
  return (
    <div className="Testimonial" id='features'>
      <div className="testimonials">
      <div className='testimonial-phone-view'>
        <h2>Learn more than just English</h2>
        <p>Over 1000 students join us monthly</p>
        <img src={require('../../images/people-images.png')} alt="" />
        <div className="btn-1">
        <a href="/"> <button className='submitbtn-1'>Download App Now</button></a>
          </div>
      </div>
        <h2>What Our Students Say About Us</h2>
        <Swiper />
      </div>

    </div>
  )
}

export default Testimonial
