import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>BUNYAT ASSAWADEEKUL</a>

      <ul className='permalink'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/jomneko" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/jom_shiba/" target="_blank"><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Bunyat Assawadeekul</small>
      </div>
    </footer>
  )
}

export default Footer