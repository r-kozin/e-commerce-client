import React from 'react'
import './contact.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>GET IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your email...' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <FacebookIcon />
                <InstagramIcon />
            </div>
        </div>
    </div>
  )
}

export default Contact