import React from 'react'
import './footer.css'

import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className='gradient__text'>
          Do You want to step in the future before the others
        </h1>
        <div className="gpt3__footer-btn">
          <p>Request Early access</p>
        </div>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="GPT-3 Logo" />
          <p>Morocco, Casablanca</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Conatct</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Social Media</p>
          <p>Counters</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Morocco, Casablanca</p>
          <p><a href="tel:+212 654-644-951">+212 654-644-951</a></p>
          <p><a href="https://wa.me/21265464451">Whatsapp</a></p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2022, Ciggy. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
